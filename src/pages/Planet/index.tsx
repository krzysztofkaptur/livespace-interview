import DefaultLayout from '@/layouts/Default'

export default function PlanetPage() {
  return (
    <DefaultLayout>
      <section className="planet">
        <article>
          <header>
            <img src="https://placehold.co/150x150" alt="" />
            <h1>planet</h1>
          </header>
          <p>population count: </p>
          <p>characters connected: </p>
        </article>
      </section>
    </DefaultLayout>
  )
}
