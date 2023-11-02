import DefaultLayout from '@/layouts/Default'

export default function VehiclePage() {
  return (
    <DefaultLayout>
      <section className="vehicle">
        <article>
          <header>
            <img src="https://placehold.co/150x150" alt="" />
            <h1>vehicle</h1>
          </header>
          <p>type: </p>
          <p>characters connected</p>
        </article>
      </section>
    </DefaultLayout>
  )
}
