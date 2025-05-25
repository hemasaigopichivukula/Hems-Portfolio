
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  text: string;
  isUser: boolean;
}

const categories = ["About Me", "Skills", "How I Work", "Projects", "Contact", "Other"];

const categoryResponses: Record<string, string[]> = {
  "About Me": ["I'm a software engineer with experience in full-stack development and AI/ML.", "Would you like to know more about my background or education?"],
  "Skills": ["I specialize in React, TypeScript, Node.js, and Python.", "What specific skills would you like to know more about?"],
  "How I Work": ["I follow agile methodologies and believe in clean, maintainable code.", "Would you like to know more about my development process?"],
  "Projects": ["I've worked on various projects including AI-powered applications and web platforms.", "Which type of projects interest you?"],
  "Contact": ["You can reach me through the contact form on this website.", "Would you like me to show you where it is?"],
  "Other": ["For any other inquiries, please use the contact form above.", "Is there something specific you'd like to know?"]
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const welcomeMessage = `👋 Hi there! I'm here to help you learn more about me.\nChoose a category to get started:\n\n${categories.join("\n")}`;

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
