import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

type VisitorMode = "recruiter" | "business";

interface MessageAction {
  label: string;
  section?: string;
  href?: string;
  icon: string;
}

interface Message {
  text: string;
  isUser: boolean;
  actions?: MessageAction[];
}

const modePrompts: Record<VisitorMode, string[]> = {
  recruiter: [
    "Why is Hema a strong program manager?",
    "Show me measurable results",
    "What are Hema's core capabilities?",
    "Show me relevant projects",
  ],
  business: [
    "What business problems can Hema solve?",
    "Show me AI and automation projects",
    "How does Hema approach an engagement?",
    "Help me evaluate a process",
  ],
};

const recruiterActions: MessageAction[] = [
  { label: "View Experience", section: "experience", icon: "fa-briefcase" },
  { label: "View Professioanl Profile", href: "https://drive.google.com/file/d/1I1_H6QLAQabi5o5ThsP4DJxOLULIMpmO/view?usp=drive_link", icon: "fa-file-lines" },
];

const businessActions: MessageAction[] = [
  { label: "Explore Services", section: "services", icon: "fa-gears" },
  { label: "Discuss a Project", section: "contact", icon: "fa-paper-plane" },
];

const processQuestions = [
  "What process or workflow would you like to improve?",
  "How is that process handled today?",
  "What is the biggest issue—time, cost, errors, visibility, or scale?",
  "What outcome would make this project successful?",
];

function getResponse(input: string, mode: VisitorMode): Message {
  const query = input.toLowerCase();

  if (query.includes("measurable") || query.includes("result") || query.includes("impact")) {
    return {
      text: "Hema's work is grounded in measurable operational impact: improved delivery rates by 24% across 14 global clients, reduced onboarding time by 30%, maintained 98% SLA compliance, and built automation supporting workforce planning for 4,300+ employees.",
      actions: [
        { label: "View Experience", section: "experience", icon: "fa-arrow-right" },
        { label: "Explore Projects", section: "projects", icon: "fa-arrow-right" },
      ],
      isUser: false,
    };
  }

  if (query.includes("program manager") || query.includes("hire") || query.includes("role")) {
    return {
      text: "Hema combines nearly five years of Amazon experience with an MBA focused on strategy and business analytics. His strengths include structured execution, stakeholder alignment, program operations, process improvement, analytics, and translating ambiguous problems into measurable plans.",
      actions: recruiterActions,
      isUser: false,
    };
  }

  if (query.includes("capabilit") || query.includes("skill") || query.includes("tool")) {
    return {
      text: "Core capabilities include AI workflow design, opportunity assessment, operations strategy, process automation, analytics, dashboards, forecasting, SQL, Excel/VBA, QuickSight, Tableau, stakeholder alignment, and change management.",
      actions: [{ label: "View Capabilities", section: "skills", icon: "fa-arrow-right" }],
      isUser: false,
    };
  }

  if (query.includes("project") || query.includes("automation") || query.includes("ai and")) {
    return {
      text: "Selected work includes an email-connected AI assistant, this interactive portfolio assistant, a QSR operations and revenue study, Amazon Control Tower, a workforce adherence intelligence system, and dynamic shift-schedule automation.",
      actions: [{ label: "Explore Projects", section: "projects", icon: "fa-arrow-right" }],
      isUser: false,
    };
  }

  if (query.includes("business problem") || query.includes("service") || query.includes("solve")) {
    return {
      text: "Hema helps businesses identify practical AI opportunities, build assistants and lightweight internal tools, automate repetitive workflows, improve operational processes, and create dashboards that support better decisions. The focus is practical implementation—not technology for its own sake.",
      actions: businessActions,
      isUser: false,
    };
  }

  if (query.includes("approach") || query.includes("engagement") || query.includes("work with")) {
    return {
      text: "Hema starts with the business problem: understand the current workflow, identify constraints, define measurable outcomes, prioritize the right intervention, build a practical solution, and support adoption. AI is applied only where it improves the operating result.",
      actions: businessActions,
      isUser: false,
    };
  }

  if (query.includes("contact") || query.includes("talk") || query.includes("discuss")) {
    return {
      text: "You can send Hema a message through the Contact section or connect on LinkedIn. For a useful first conversation, briefly describe the process, current challenge, and outcome you want to improve.",
      actions: [
        { label: "Contact Hema", section: "contact", icon: "fa-paper-plane" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/hemasaigopichivukula/", icon: "fa-linkedin-in" },
      ],
      isUser: false,
    };
  }

  return {
    text: mode === "recruiter"
      ? "I can help you evaluate Hema's experience, capabilities, measurable results, and project fit. Try one of the suggested questions below."
      : "I can help you explore services, practical AI and automation examples, or assess a process that may be worth improving. Try one of the suggested questions below.",
    isUser: false,
  };
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<VisitorMode | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [processStep, setProcessStep] = useState<number | null>(null);
  const [processAnswers, setProcessAnswers] = useState<string[]>([]);
  const [launchedFromProject, setLaunchedFromProject] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const openPortfolioAssistant = () => {
      setLaunchedFromProject(true);
      setOpen(true);
    };

    window.addEventListener("open-portfolio-assistant", openPortfolioAssistant);
    return () => window.removeEventListener("open-portfolio-assistant", openPortfolioAssistant);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }), 100);
    return () => window.clearTimeout(timer);
  }, [open, messages, isTyping, mode]);

  const resetAssistant = () => {
    setMode(null);
    setMessages([]);
    setInput("");
    setIsTyping(false);
    setProcessStep(null);
    setProcessAnswers([]);
    setLaunchedFromProject(false);
  };

  const selectMode = (selectedMode: VisitorMode) => {
    setMode(selectedMode);
    setMessages([{
      isUser: false,
      text: selectedMode === "recruiter"
        ? "Great—I'll help you quickly evaluate Hema's experience, capabilities, projects, and measurable business impact."
        : "Great—I'll help you explore practical AI, automation, analytics, and operations support for your business.",
      actions: selectedMode === "recruiter" ? recruiterActions : businessActions,
    }]);
  };

  const addAssistantResponse = (response: Message) => {
    setIsTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, response]);
      setIsTyping(false);
    }, 450);
  };

  const startProcessAssessment = () => {
    setProcessAnswers([]);
    setProcessStep(0);
    setMessages((current) => [
      ...current,
      { text: "Help me evaluate a process", isUser: true },
    ]);
    addAssistantResponse({ text: `Let's do a quick opportunity check. ${processQuestions[0]}`, isUser: false });
  };

  const handlePrompt = (prompt: string) => {
    if (!mode || isTyping) return;
    if (prompt === "Help me evaluate a process") {
      startProcessAssessment();
      return;
    }
    setMessages((current) => [...current, { text: prompt, isUser: true }]);
    addAssistantResponse(getResponse(prompt, mode));
  };

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault();
    const value = input.trim();
    if (!value || !mode || isTyping) return;

    setInput("");
    setMessages((current) => [...current, { text: value, isUser: true }]);

    if (processStep !== null) {
      const updatedAnswers = [...processAnswers, value];
      setProcessAnswers(updatedAnswers);

      if (processStep < processQuestions.length - 1) {
        const nextStep = processStep + 1;
        setProcessStep(nextStep);
        addAssistantResponse({ text: processQuestions[nextStep], isUser: false });
      } else {
        setProcessStep(null);
        addAssistantResponse({
          text: `Opportunity summary\n\nProcess: ${updatedAnswers[0]}\nCurrent approach: ${updatedAnswers[1]}\nPrimary constraint: ${updatedAnswers[2]}\nDesired outcome: ${updatedAnswers[3]}\n\nThis is a useful starting point for assessing whether process redesign, automation, analytics, or an AI-enabled workflow is appropriate.`,
          actions: [{ label: "Discuss This Project", section: "contact", icon: "fa-paper-plane" }],
          isUser: false,
        });
      }
      return;
    }

    addAssistantResponse(getResponse(value, mode));
  };

  const handleAction = (action: MessageAction) => {
    if (action.section) {
      setOpen(false);
      window.setTimeout(() => document.getElementById(action.section!)?.scrollIntoView({ behavior: "smooth" }), 150);
    } else if (action.href) {
      window.open(action.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {!open && (
          <div className="rounded-full bg-blue-900 px-3 py-1.5 text-xs font-medium text-white shadow-md">
            Ask Hema&apos;s AI Portfolio Assistant
          </div>
        )}
        <Button
          className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 p-0 shadow-xl transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-900"
          onClick={() => setOpen(true)}
          aria-label="Open Hema's AI Portfolio Assistant"
        >
          <i className="fas fa-comment-dots text-xl text-white"></i>
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed inset-0 z-50 h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 gap-0 overflow-hidden rounded-none border-0 p-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:left-auto sm:top-auto sm:h-[620px] sm:max-h-[calc(100vh-2rem)] sm:w-[440px] sm:rounded-2xl sm:border sm:shadow-2xl sm:translate-x-0 sm:translate-y-0">
          <div className="flex h-full min-h-0 flex-col bg-white">
            <div className="shrink-0 bg-gradient-to-r from-blue-800 to-blue-900 px-5 py-4 pr-12 text-white">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="min-w-0">
                    <DialogTitle className="truncate font-bold text-white">AI Portfolio Assistant</DialogTitle>
                    <DialogDescription className="sr-only">
                      Explore Hema&apos;s experience, projects, services, and business capabilities.
                    </DialogDescription>
                    <p className="flex items-center gap-1.5 text-xs text-blue-100">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      Guided by Hema&apos;s portfolio data
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {mode && (
              <div className="flex shrink-0 items-center justify-between border-b bg-white px-4 py-2">
                <span className="text-xs font-medium text-gray-500">
                  {processStep === null ? (mode === "recruiter" ? "Recruiter view" : "Business view") : `Process assessment · Step ${processStep + 1} of ${processQuestions.length}`}
                </span>
                <Button variant="ghost" size="sm" className="h-8 text-primary hover:bg-blue-50 hover:text-primary" onClick={resetAssistant}>
                  <i className="fas fa-house mr-2"></i> Start Over
                </Button>
              </div>
            )}

            {!mode ? (
              <div className="flex flex-1 flex-col justify-center overflow-y-auto p-6">
                <div className="mx-auto max-w-sm text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-primary">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {launchedFromProject ? "You're testing the assistant" : "What brings you here?"}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {launchedFromProject
                      ? "Explore the guided experience by choosing the path that best matches your visit."
                      : "Choose a path and I'll surface the most relevant experience, evidence, services, and next steps."}
                  </p>
                  <div className="mt-6 grid gap-3">
                    <button onClick={() => selectMode("recruiter")} className="group rounded-xl border border-blue-100 bg-blue-50 p-4 text-left transition hover:border-blue-300 hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-user-tie text-xl text-primary"></i>
                        <div><p className="font-semibold text-gray-900">I&apos;m hiring</p><p className="text-sm text-gray-600">Experience, capabilities, results, and role fit</p></div>
                        <i className="fas fa-arrow-right ml-auto text-primary transition-transform group-hover:translate-x-1"></i>
                      </div>
                    </button>
                    <button onClick={() => selectMode("business")} className="group rounded-xl border border-blue-100 bg-white p-4 text-left transition hover:border-blue-300 hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-building text-xl text-primary"></i>
                        <div><p className="font-semibold text-gray-900">I need help with my business</p><p className="text-sm text-gray-600">AI, automation, analytics, and operations</p></div>
                        <i className="fas fa-arrow-right ml-auto text-primary transition-transform group-hover:translate-x-1"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ScrollArea className="min-h-0 flex-1 bg-gray-50/70 px-4 py-4">
                  <div className="space-y-4 pr-2">
                    {messages.map((message, index) => (
                      <div key={`${message.text}-${index}`} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${message.isUser ? "rounded-br-md bg-primary text-white" : "rounded-bl-md border border-gray-100 bg-white text-gray-700"}`}>
                          <p className="whitespace-pre-line">{message.text}</p>
                          {message.actions && (
                            <div className="mt-3 flex flex-wrap gap-2 border-t border-gray-100 pt-3">
                              {message.actions.map((action) => (
                                <button key={action.label} onClick={() => handleAction(action)} className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-primary transition hover:bg-blue-100">
                                  <i className={`fas ${action.icon} mr-1.5`}></i>{action.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex gap-1 rounded-2xl rounded-bl-md border border-gray-100 bg-white px-4 py-3 shadow-sm" aria-label="Assistant is typing">
                          {[0, 1, 2].map((dot) => <span key={dot} className="h-2 w-2 animate-pulse rounded-full bg-blue-400" style={{ animationDelay: `${dot * 150}ms` }}></span>)}
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} className="h-px" />
                  </div>
                </ScrollArea>

                {processStep === null && (
                  <div className="border-t bg-white px-4 py-3">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">Suggested questions</p>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {modePrompts[mode].map((prompt) => (
                        <button key={prompt} onClick={() => handlePrompt(prompt)} disabled={isTyping} className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-800 transition hover:bg-blue-100 disabled:opacity-50">
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSend} className="shrink-0 border-t bg-white p-4">
                  {processStep !== null && (
                    <label htmlFor="assistant-response" className="mb-2 block text-xs font-semibold text-gray-700">
                      Your response
                    </label>
                  )}
                  <div className="flex gap-2">
                  <Input id="assistant-response" value={input} onChange={(event) => setInput(event.target.value)} placeholder={processStep === null ? "Ask about Hema..." : "Enter your answer here..."} className="flex-1" disabled={isTyping} autoFocus={processStep !== null} />
                  <Button type="submit" disabled={!input.trim() || isTyping} aria-label="Send message" className="w-11 px-0">
                    <i className="fas fa-paper-plane"></i>
                  </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
