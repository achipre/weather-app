import './sectionStaticsToday.css'
export default function SectionStatictsToday ({ isSection }) {
  return (
    <article className={isSection === 'PinMap' ? 'articleFull' : 'weatherTwo'}>
      <h2>2Today&apos;s HightLight</h2>
    </article>
  )
}
