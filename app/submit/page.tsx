import SubmitIntro from "@/ui/components/submit/SubmitIntro"
import StoryForm from "@/ui/components/submit/StoryForm"
import ConsentNote from "@/ui/components/submit/ConsentNote"

export default function SubmitPage() {
  return (
    <section
      style={{
        padding: "120px 24px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <SubmitIntro />
      <StoryForm />
      <ConsentNote />
    </section>
  )
}
