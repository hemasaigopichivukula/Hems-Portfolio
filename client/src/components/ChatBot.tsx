import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  text: string;
  isUser: boolean;
  showCategories?: boolean;
  isGreeting?: boolean;
}

const categories = [
  "About Hema",
  "Skills & Approach",
  "How I Work",
  "Projects & Services",
  "Contact",
  "Other",
];

const questionsAndAnswers: Record<
  string,
  { Q: string; A: string }[]
> = {
  "About Hema": [
    {
      Q: "What do you do?",
      A: "I'm a strategic consultant and program manager. I help organizations improve operations, manage programs, and use data to make better decisions.",
    },
    {
      Q: "What kind of background do you have?",
      A: "I've worked at Amazon, universities, and nonprofits—managing global programs and solving real-world challenges.",
    },
    {
      Q: "What industries have you worked in?",
      A: "Mainly tech, education, and nonprofit sectors. I'm industry-flexible with a focus on solving execution-related problems.",
    },
  ],

  "Skills & Approach": [
    {
      Q: "What are you good at?",
      A: "Project execution, stakeholder communication, process improvement, and data visualization.",
    },
    {
      Q: "What tools do you use?",
      A: "JIRA, Tableau, Power BI, Excel VBA, SQL, Monday.com, Microsoft Project, Notion, and Confluence.",
    },
    {
      Q: "How do you approach projects?",
      A: "I start by understanding the problem, align with goals, build a roadmap, and track progress through measurable outcomes.",
    },
  ],

  "How I Work": [
    {
      Q: "Do you work with teams or individuals?",
      A: "Both! I support teams on strategy execution and work with individuals on process design or upskilling.",
    },
    {
      Q: "Are you open to remote or in-person roles?",
      A: "Yes, I'm flexible. I work remotely and am open to relocation for the right opportunity.",
    },
    {
      Q: "How do you handle resistance to change?",
      A: "By listening first. I connect changes to business outcomes and make transitions easy to adopt.",
    },
  ],

  "Projects & Services": [
    {
      Q: "Can I see your work?",
      A: "Yes! Visit the Projects section to explore my work in AI, operations strategy, analytics, program leadership, and workflow automation.",
    },
    {
      Q: "What is your QSR Operations study?",
      A: "It is an independent consulting-style analysis of peak-hour bottlenecks, drive-thru throughput, staffing alignment, customer experience, and potential revenue recovery opportunities.",
    },
    {
      Q: "What is your AI Email Assistant project?",
      A: "It is a functional email-connected AI assistant that supports conversational inbox retrieval, sender and date filtering, recent-message queries, and priority visibility.",
    },
    {
      Q: "Do you do freelance consulting?",
      A: "Yes, I'm open to short-term consulting, strategic projects, and fractional leadership opportunities.",
    },
    {
      Q: "Can you help with dashboards or reporting?",
      A: "Absolutely. I've built dashboards that track KPIs, SLAs, workforce performance, and operational risks.",
    },
  ],

  Contact: [
    {
      Q: "How can I contact you?",
      A: "Email me at hchiv001@ucr.edu or use the Contact Me section on this website.",
    },
  ],

  Other: [
    {
      Q: "Not seeing what you need?",
      A: "Send me a quick message using the Contact Me form, and I'll get back to you soon.",
    },
  ],
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null
  );
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(
    null
  );

  // This reference marks the bottom of the conversation.
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const welcomeMessage =
    "👋 Hi there! I'm PP, Hema's assistant, and I'm here to help.\nPlease type your question or click the 💡 Options button below to explore categories.";

  // Show welcome message when chatbot opens.
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          text: welcomeMessage,
          isUser: false,
          isGreeting: true,
        },
      ]);
    }
  }, [open, messages.length]);

  // Automatically scroll after messages, categories, or questions change.
  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [open, messages, selectedCategory, selectedQuestion]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedQuestion(null);

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        text: category,
        isUser: true,
      },
      {
        text: `Here are some common questions about ${category}:`,
        isUser: false,
      },
    ]);
  };

  const handleQuestionClick = (
    question: string,
    answer: string
  ) => {
    setSelectedQuestion(question);

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        text: question,
        isUser: true,
      },
      {
        text: answer,
        isUser: false,
      },
    ]);
  };

  const handleStartAgain = () => {
    setSelectedCategory(null);
    setSelectedQuestion(null);

    setMessages([
      {
        text: welcomeMessage,
        isUser: false,
        isGreeting: true,
      },
    ]);
  };

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    const currentInput = trimmedInput;

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        text: currentInput,
        isUser: true,
      },
    ]);

    setInput("");

    const matchingCategory = categories.find((category) =>
      currentInput
        .toLowerCase()
        .includes(category.toLowerCase())
    );

    window.setTimeout(() => {
      const timeGreetings = [
        "good morning",
        "good afternoon",
        "good evening",
        "good night",
      ];

      const casualGreetings = [
        "hi",
        "hello",
        "hey",
        "howdy",
        "hola",
        "namaste",
      ];

      const goodbyes = [
        "bye",
        "goodbye",
        "see you",
        "cya",
      ];

      const thanks = [
        "thank",
        "thanks",
        "appreciate",
      ];

      const lowerInput = currentInput.toLowerCase();

      const extractName = (text: string): string | null => {
        const words = text.trim().split(/\s+/);

        const lowerWords = words.map((word) =>
          word.toLowerCase()
        );

        const iAmIndex = lowerWords.findIndex(
          (word, index) =>
            word === "am" &&
            lowerWords[index - 1] === "i"
        );

        if (iAmIndex !== -1 && words[iAmIndex + 1]) {
          return words[iAmIndex + 1];
        }

        const imIndex = lowerWords.findIndex(
          (word) => word === "i'm"
        );

        if (imIndex !== -1 && words[imIndex + 1]) {
          return words[imIndex + 1];
        }

        const nameIndex = lowerWords.findIndex(
          (word, index) =>
            word === "name" &&
            lowerWords[index + 1] === "is"
        );

        if (nameIndex !== -1 && words[nameIndex + 2]) {
          return words[nameIndex + 2];
        }

        return null;
      };

      const name = extractName(currentInput);

      if (
        timeGreetings.some((greeting) =>
          lowerInput.includes(greeting)
        )
      ) {
        const greeting = timeGreetings.find((item) =>
          lowerInput.includes(item)
        );

        setMessages((previousMessages) => [
          ...previousMessages,
          {
            text: `${
              greeting
                ? greeting.charAt(0).toUpperCase() +
                  greeting.slice(1)
                : "Hello"
            }! 👋 I'm PP, Hema's assistant, and I'm here to help.\nPlease type your question or click the 💡 Options button below to explore categories.`,
            isUser: false,
            isGreeting: true,
          },
        ]);

        return;
      }

      if (
        casualGreetings.some((greeting) =>
          lowerInput.includes(greeting)
        )
      ) {
        const greeting = casualGreetings.find((item) =>
          lowerInput.includes(item)
        );

        let response = `${
          greeting
            ? greeting.charAt(0).toUpperCase() +
              greeting.slice(1)
            : "Hello"
        }! `;

        if (name) {
          response += `Hi ${name}, `;
        }

        response +=
          "👋 I'm PP, Hema's assistant, and I'm here to help.\nPlease type your question or click the 💡 Options button below to explore categories.";

        setMessages((previousMessages) => [
          ...previousMessages,
          {
            text: response,
            isUser: false,
            isGreeting: true,
          },
        ]);

        return;
      }

      if (
        goodbyes.some((goodbye) =>
          lowerInput.includes(goodbye)
        )
      ) {
        setMessages((previousMessages) => [
          ...previousMessages,
          {
            text: "Goodbye! Feel free to return if you have more questions about Hema.",
            isUser: false,
          },
        ]);

        return;
      }

      if (
        thanks.some((thankYou) =>
          lowerInput.includes(thankYou)
        )
      ) {
        setMessages((previousMessages) => [
          ...previousMessages,
          {
            text: "You're welcome! I'm happy to help you learn more about Hema.",
            isUser: false,
          },
        ]);

        return;
      }

      if (matchingCategory) {
        setSelectedCategory(matchingCategory);
        setSelectedQuestion(null);

        setMessages((previousMessages) => [
          ...previousMessages,
          {
            text: `Here are some common questions about ${matchingCategory}:`,
            isUser: false,
          },
        ]);

        return;
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          text:
            "I'm focused on helping you learn about Hema. Please click the 💡 Options button to explore these categories:\n\n" +
            categories.join("\n"),
          isUser: false,
          isGreeting: true,
        },
      ]);
    }, 500);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <div className="animate-bounce rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground shadow-md">
          Hema&apos;s Assistant
        </div>

        <Button
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0 shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
          onClick={() => setOpen(true)}
          aria-label="Open Hema's assistant"
        >
          <div className="robot-container">
            <div className="robot">
              <div className="head">
                <div className="eyes" />
                <div className="antenna" />
              </div>

              <div className="body">
                <div className="arm left-arm" />
                <div className="arm right-arm animate-wave" />
              </div>

              <div className="legs">
                <div className="leg left-leg" />
                <div className="leg right-leg" />
              </div>
            </div>
          </div>
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed left-[50%] top-[50%] z-50 h-[85vh] max-h-[600px] w-[95vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] overflow-hidden p-4 data-[state=open]:duration-300 sm:left-auto sm:right-4 sm:h-[500px] sm:max-w-[425px] sm:translate-x-0">
          <div className="flex h-full flex-col">
            <div className="mb-4 text-lg font-bold">
              Chat Support
            </div>

            <ScrollArea className="min-h-0 flex-1 pr-2">
              <div className="space-y-4 pb-4">
                {messages.map((message, index) => {
                  const isLatestMessage =
                    index === messages.length - 1;

                  const shouldShowCategoryQuestions =
                    !message.isUser &&
                    selectedCategory &&
                    message.text ===
                      `Here are some common questions about ${selectedCategory}:`;

                  return (
                    <div
                      key={`${message.text}-${index}`}
                      className={`flex ${
                        message.isUser
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] whitespace-pre-line rounded-lg px-4 py-2 ${
                          message.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.text}

                        {!message.isUser &&
                          message.isGreeting && (
                            <div className="mt-4">
                              <Button
                                variant="outline"
                                className="mb-2 w-full text-sm"
                                onClick={() => {
                                  setSelectedCategory(null);
                                  setSelectedQuestion(null);

                                  setMessages(
                                    (previousMessages) => [
                                      ...previousMessages,
                                      {
                                        text: "Choose a category below:",
                                        isUser: false,
                                        showCategories: true,
                                      },
                                    ]
                                  );
                                }}
                              >
                                💡 Options
                              </Button>
                            </div>
                          )}

                        {!message.isUser &&
                          message.showCategories && (
                            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {categories.map((category) => (
                                <Button
                                  key={category}
                                  variant="outline"
                                  className="h-auto whitespace-normal px-3 py-2 text-sm"
                                  onClick={() =>
                                    handleCategoryClick(category)
                                  }
                                >
                                  {category}
                                </Button>
                              ))}
                            </div>
                          )}

                        {shouldShowCategoryQuestions && (
                          <div className="mt-4 flex flex-col gap-2">
                            {questionsAndAnswers[
                              selectedCategory
                            ].map(({ Q, A }) => (
                              <Button
                                key={Q}
                                variant="outline"
                                className="h-auto w-full whitespace-normal rounded-lg bg-white p-3 text-left text-sm shadow-sm hover:bg-gray-50"
                                onClick={() =>
                                  handleQuestionClick(Q, A)
                                }
                              >
                                {Q}
                              </Button>
                            ))}
                          </div>
                        )}

                        {!message.isUser &&
                          selectedQuestion &&
                          isLatestMessage && (
                            <Button
                              variant="outline"
                              className="mt-4 w-full text-sm"
                              onClick={handleStartAgain}
                            >
                              Start Again
                            </Button>
                          )}
                      </div>
                    </div>
                  );
                })}

                {/* The chatbot scrolls to this element automatically. */}
                <div ref={messagesEndRef} className="h-px" />
              </div>
            </ScrollArea>

            <form
              onSubmit={handleSend}
              className="mt-4 flex gap-2"
            >
              <Input
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder="Type a question..."
                className="flex-1"
              />

              <Button type="submit">
                Send
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}