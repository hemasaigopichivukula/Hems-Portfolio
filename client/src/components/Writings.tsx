
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const perspectives = [
  {
    title: "One Year, One Vision – Why the AI Pitch Competition Was My Defining Moment",
    preview: "In June 2024, I was the only active member of the Product Club. With a vision in mind but no team or blueprint, I committed to building something that had never been done before at our school.",
    content: `In June 2024, I was the only active member of the Product Club. With a vision in mind but no team or blueprint, I committed to building something that had never been done before at our school—a cross-university AI Pitch Competition.

I began by recruiting passionate students to join the club, reaching out to student organizations across other universities, and attending their events to foster relationships. I drafted personalized emails, initiated LinkedIn conversations, and slowly built a coalition of collaborators from institutions like USC and UCSD.

The journey wasn't linear. We held numerous planning meetings, overcame logistical hurdles, and iterated on our competition structure until it worked. We scaled the event from 40 attendees in 2024 to an incredible 135 attendees in 2025. With the support of Perplexity AI, we even secured free access to their tools for participants to enhance their research and pitch quality.

We structured the event to simulate real-world pitch environments—90-second video entries, a live final round with timed pitches, and a judging panel featuring professors and industry professionals. Teams were evaluated not only on the innovation of their idea but also on feasibility, impact, and presentation.

What made this event so defining wasn't just its success—it was the fact that it was the first inter-university competition ever hosted by our business school. We received recognition and awards internally, but more importantly, we created a platform that will live on beyond our time here. It demonstrated that with structure, clarity, and courage, students can build what doesn't yet exist.`
  },
  {
    title: "What Makes a Great Mentor—and Why I Found Four",
    preview: "I've often been told that if you find even one great mentor in your life, you're lucky. I've been fortunate to find four. Each of them brought something completely different into my life.",
    content: `I've often been told that if you find even one great mentor in your life, you're lucky. I've been fortunate to find four. Each of them brought something completely different into my life—and because of them, I've grown in ways I never imagined.

Ravi taught me structure, discipline, and the impact of trust-based leadership. Dilip showed me the power of grit and self-belief, rising from a customer associate to a senior supply chain leader. Rahul taught me that career paths aren't linear—that creativity and curiosity can be your greatest assets. And Sabarish helped me understand the mental frameworks that define successful entrepreneurs.

These mentors didn't just give me advice—they modeled values. They showed me how to be firm without losing humility, how to give others space to lead, and how to ask better questions. They held a mirror to my own potential.

This editorial isn't just a thank-you letter. It's a call to action: seek out people who challenge you to grow—and be that person for someone else. Mentorship isn't transactional; it's transformational.`
  },
  {
    title: "AI as a Mentor – More Than Just a Tool for Job Applications",
    preview: "Most people see AI as a tool to save time—polish a resume, draft an email, summarize a document. But I see AI as something much deeper.",
    content: `Most people see AI as a tool to save time—polish a resume, draft an email, summarize a document. But I see AI as something much deeper. It has become my 24/7 coach, sounding board, and partner in strategic thinking.

I use AI to structure ideas, challenge assumptions, and prepare for high-stakes conversations. I ask it to simulate objections I might face in a pitch or to offer frameworks for decision-making. I use it to reflect on emotional barriers, brainstorm startup concepts, or even build event agendas.

AI isn't replacing human interaction—it's enhancing it. It helps me ask better questions of myself and of others. For students and professionals, this is a wake-up call: don't just let AI do your work—let it make you better at your work.

The future isn't AI vs. humans. It's humans who know how to use AI versus those who don't.`
  },
  {
    title: "Probing and Bias for Action – The Twin Engines of Progress",
    preview: "Two words that guide every decision I make—and every conversation I lead—are: Probing and Action.",
    content: `Two words that guide every decision I make—and every conversation I lead—are: Probing and Action.

Probing is the art of asking questions that uncover insights. It means going deeper than surface-level answers. It's what I use when mentoring peers, designing programs, or solving organizational bottlenecks. It allows me to anticipate problems before they arise and discover new possibilities others overlook.

Bias for Action, on the other hand, is what turns those insights into movement. It's about taking the first step even when the whole path isn't clear. It's what helped me launch the AI Pitch Competition with no roadmap, scale nonprofit operations, and propose new ideas without waiting for permission.

Together, these principles drive innovation. One gives you clarity, the other gives you momentum. I share these with every mentee, and I practice them daily.

The takeaway? Learn to see differently. Then, move decisively.`
  },
  {
    title: "Beyond Execution – My Journey from Operations to Strategy",
    preview: "I started my career at Amazon executing with precision—tracking metrics, managing SLAs, and delivering against aggressive timelines.",
    content: `I started my career at Amazon executing with precision—tracking metrics, managing SLAs, and delivering against aggressive timelines. That phase taught me the importance of discipline, consistency, and tactical focus.

But what transformed my growth was the shift from "what needs to be done" to "why are we doing this?" I started seeing connections between processes, began proposing improvements, and initiated dashboards that helped teams think bigger than their daily goals.

That's when I understood that strategy isn't a title—it's a mindset. It's the ability to align small actions with a big vision. It's about setting priorities based on impact, not urgency.

This shift has changed how I lead. I now strive to be someone who not only delivers but designs. Someone who builds systems, not just executes them.`
  }
];

export default function Writings() {
  return (
    <section id="writings" className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Editorials</h2>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="flex gap-6"
          >
            {[...perspectives, ...perspectives].map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="min-w-[300px] bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-2">{item.preview}</p>
                      <p className="text-blue-600 font-medium">Read More →</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <div className="prose max-w-none">
                    {item.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
