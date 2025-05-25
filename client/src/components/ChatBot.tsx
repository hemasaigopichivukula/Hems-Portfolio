import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  text: string;
  isUser: boolean;
}

const categories = ["About Hema", "Skills & Approach", "How I Work", "Projects & Services", "Contact", "Other"];

const questionsAndAnswers: Record<string, { Q: string; A: string }[]> = {
  "About Hema": [
    { Q: "What do you do?", A: "I'm a strategic consultant and program manager. I help organizations improve operations, manage programs, and use data to make better decisions." },
    { Q: "What kind of background do you have?", A: "I've worked at Amazon, universities, and nonprofits—managing global programs and solving real-world challenges." },
    { Q: "What industries have you worked in?", A: "Mainly tech, education, and nonprofit sectors. I'm industry-flexible with a focus on solving execution-related problems." }
  ],
  "Skills & Approach": [
    { Q: "What are you good at?", A: "Project execution, stakeholder communication, process improvement, and data visualization." },
    { Q: "What tools do you use?", A: "JIRA, Tableau, Power BI, Excel VBA, SQL, Monday.com, Microsoft Project, Notion, and Confluence." },
    { Q: "How do you approach projects?", A: "I start by understanding the problem, align with goals, build a roadmap, and track progress through measurable outcomes." }
  ],
  "How I Work": [
    { Q: "Do you work with teams or individuals?", A: "Both! I support teams on strategy execution and work with individuals on process design or upskilling." },
    { Q: "Are you open to remote or in-person roles?", A: "Yes, I'm flexible. I work remotely and am open to relocation for the right opportunity." },
    { Q: "How do you handle resistance to change?", A: "By listening first. I connect changes to business outcomes and make transitions easy to adopt." }
  ],
  "Projects & Services": [
    { Q: "Can I see your work?", A: "Yes! Check out the Portfolio or Resume section on this site." },
    { Q: "Do you do freelance consulting?", A: "Yes, I'm open to short-term consulting, strategic projects, or fractional leadership roles." },
    { Q: "Can you help with dashboards or reporting?", A: "Absolutely. I've built dashboards that track KPIs, SLAs, and team performance in real-time." }
  ],
  "Contact": [
    { Q: "How can I contact you?", A: "Email me at hchiv001@ucr.edu or use the Contact Me section on this site." }
  ],
  "Other": [
    { Q: "Not seeing what you need?", A: "Just send me a quick message using the Contact Me form. I'll get back to you soon" }
  ]
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const welcomeMessage = "👋 Hi there! I'm PP, Hema's assistant and I am here to help you learn more about Hema.";

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ text: welcomeMessage, isUser: false }]);
    }
  }, [open]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedQuestion(null);
    setMessages(prev => [...prev,
      { text: category, isUser: true },
      { text: `Here are some common questions about ${category}:`, isUser: false }
    ]);
    setTimeout(() => {
      const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        scrollArea.scrollTo({
          top: scrollArea.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleQuestionClick = (question: string, answer: string) => {
    setSelectedQuestion(question);
    setMessages(prev => [...prev,
      { text: question, isUser: true },
      { text: answer, isUser: false }
    ]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    const category = categories.find(cat => 
      input.toLowerCase().includes(cat.toLowerCase())
    );

    setTimeout(() => {
      // Check for casual greetings
      const greetings = ['hi', 'hello', 'hey', 'howdy'];
      const goodbyes = ['bye', 'goodbye', 'see you', 'cya'];
      const thanks = ['thank', 'thanks', 'appreciate'];
      
      const lowerInput = input.toLowerCase();
      
      if (greetings.some(greeting => lowerInput.includes(greeting))) {
        setMessages(prev => [...prev, {
          text: "👋 Hello! I'm PP, Hema's assistant. I can tell you all about Hema's experience, skills, projects, and more. What would you like to know?",
          isUser: false
        }]);
      } else if (goodbyes.some(bye => lowerInput.includes(bye))) {
        setMessages(prev => [...prev, {
          text: "Goodbye! Feel free to come back if you have more questions about Hema!",
          isUser: false
        }]);
      } else if (thanks.some(thank => lowerInput.includes(thank))) {
        setMessages(prev => [...prev, {
          text: "You're welcome! I'm happy to help you learn more about Hema.",
          isUser: false
        }]);
      } else if (category) {
        setSelectedCategory(category);
        setSelectedQuestion(null);
        setMessages(prev => [...prev, {
          text: `Here are some common questions about ${category}:`,
          isUser: false
        }]);
      } else {
        setMessages(prev => [...prev, {
          text: "I'm focused on helping you learn about Hema. Please choose from one of these categories to get specific information:\n\n" + categories.join("\n"),
          isUser: false
        }]);
      }
      
      // Scroll to bottom after messages update
      setTimeout(() => {
        const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollArea) {
          scrollArea.scrollTo({
            top: scrollArea.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    }, 500);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm shadow-md animate-bounce">
          Hema's Assistant
        </div>
        <Button
          className="rounded-full w-14 h-14 p-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          onClick={() => setOpen(true)}
        >
          <div className="robot-container">
            <div className="robot">
              <div className="head">
                <div className="eyes"></div>
                <div className="antenna"></div>
              </div>
              <div className="body">
                <div className="arm left-arm"></div>
                <div className="arm right-arm animate-wave"></div>
              </div>
              <div className="legs">
                <div className="leg left-leg"></div>
                <div className="leg right-leg"></div>
              </div>
            </div>
          </div>
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] fixed right-4 left-auto sm:translate-x-0 sm:translate-y-[-50%] sm:top-[50%] data-[state=open]:duration-300">
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
                      {!message.isUser && selectedCategory && message.text.includes(selectedCategory) && (
                        <div className="flex flex-col gap-2 mt-4">
                          {questionsAndAnswers[selectedCategory].map(({ Q, A }) => (
                            <Button
                              key={Q}
                              variant="outline"
                              className="text-sm text-left p-3 w-full bg-white hover:bg-gray-50 rounded-lg shadow-sm"
                              onClick={() => {
                                handleQuestionClick(Q, A);
                                setTimeout(() => {
                                  const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
                                  if (scrollArea) {
                                    scrollArea.scrollTo({
                                      top: scrollArea.scrollHeight,
                                      behavior: 'smooth'
                                    });
                                  }
                                }, 100);
                              }}
                            >
                              {Q}
                            </Button>
                          ))}
                        </div>
                      )}
                      {selectedQuestion && (
                        <Button
                          variant="outline"
                          className="mt-4 w-full text-sm"
                          onClick={() => {
                            setSelectedCategory(null);
                            setSelectedQuestion(null);
                            setMessages([{ text: welcomeMessage, isUser: false }]);
                          }}
                        >
                          Start Again
                        </Button>
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