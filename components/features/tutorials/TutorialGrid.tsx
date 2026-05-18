import TutorialCard from './TutorialCard'
import type { Tutorial } from '@/lib/data/tutorials'

interface TutorialGridProps {
  tutorials: Tutorial[]
}

export default function TutorialGrid({ tutorials }: TutorialGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {tutorials.map((tutorial) => (
        <TutorialCard key={tutorial.id} tutorial={tutorial} />
      ))}
    </div>
  )
}
