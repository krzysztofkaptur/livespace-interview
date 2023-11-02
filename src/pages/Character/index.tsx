import DefaultLayout from '@/layouts/Default'

export default function CharacterPage() {
  return (
    <DefaultLayout>
      <section className="character">
        <article>
          <header>
            <img src="https://placehold.co/150x150" alt="" />
            <h1>fullname</h1>
          </header>
          <p>planet of origin: </p>
          <p>vehicles:</p>
          <p>race: </p>
        </article>
      </section>
    </DefaultLayout>
  )
}
