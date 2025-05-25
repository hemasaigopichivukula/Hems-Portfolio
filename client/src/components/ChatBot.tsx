
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  text: string;
  isUser: boolean;
}

const categories = ["About Me", "Skills & Approach", "How I Work", "Projects & Services", "Contact", "Other"];

const categoryResponses: Record<string, string[]> = {
  "About Me": [
    "I'm a strategic consultant and program manager. I help organizations improve operations, manage programs, and use data to make better decisions.",
    "I've worked at Amazon, universities, and nonprofits—managing global programs and solving real-world challenges.",
    "Would you like to know more about my background?"
  ],
  "Skills & Approach": [
    "I specialize in project execution, stakeholder communication, process improvement, and data visualization.",
    "I use tools like JIRA, Tableau, Power BI, Excel VBA, SQL, Monday.com, Microsoft Project, Notion, and Confluence.",
    "I start by understanding the problem, align with goals, build a roadmap, and track progress through measurable outcomes."
  ],
  "How I Work": [
    "I support both teams on strategy execution and work with individuals on process design or upskilling.",
    "I'm flexible with remote work and open to relocation for the right opportunity.",
    "I handle change by listening first, connecting changes to business outcomes, and making transitions easy to adopt."
  ],
  "Projects & Services": [
    "Check out my Portfolio or Resume section to see my work.",
    "I'm open to short-term consulting, strategic projects, or fractional leadership roles.",
    "I have experience building dashboards that track KPIs, SLAs, and team performance in real-time."
  ],
  "Contact": ["You can reach me through the contact form on this website.", "Would you like me to show you where it is?"],
  "Other": ["For any other inquiries, please use the contact form above.", "Is there something specific you'd like to know?"]
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const welcomeMessage = "👋 Hi there! I'm here to help you learn more about me.\nChoose a category to get started:";

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ text: welcomeMessage, isUser: false }]);
    }
  }, [open]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    const category = categories.find(cat => 
      input.toLowerCase().includes(cat.toLowerCase())
    );

    setTimeout(() => {
      if (category) {
        const responses = categoryResponses[category];
        setMessages(prev => [...prev, { text: responses.join("\n"), isUser: false }]);
      } else {
        setMessages(prev => [...prev, {
          text: "I'm not sure what you mean. Please choose from one of these categories:\n\n" + categories.join("\n"),
          isUser: false
        }]);
      }
    }, 500);
  };

  const handleCategoryClick = (category: string) => {
    const userMessage = { text: category, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const responses = categoryResponses[category];
      setMessages(prev => [...prev, { text: responses.join("\n"), isUser: false }]);
    }, 500);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 p-0 shadow-lg"
        onClick={() => setOpen(true)}
      >
        <i className="fas fa-comments"></i>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col h-[500px]">
            <div className="text-lg font-bold mb-4">Chat Support</div>
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((message, i) => (
                  <div
                    key={i}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] whitespace-pre-line ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      {message.text}
                      {!message.isUser && i === 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {categories.map((category) => (
                            <Button
                              key={category}
                              variant="outline"
                              className="text-sm"
                              onClick={() => handleCategoryClick(category)}
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <form onSubmit={handleSend} className="mt-4 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a category..."
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
