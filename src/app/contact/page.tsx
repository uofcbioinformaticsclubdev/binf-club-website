
export default function ContactPage() {
  return (
    <>
  <section className="p-10 bg-gradient-to-tr bg-cream">
    <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 h-full">
      <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
        <span className="block mb-2">U of C Bioinformatics club</span>
        <h1 className="text-5xl font-extrabold dark:text-gray-900 text-seagreen">Want to get in touch?</h1>
        <p className="my-8">
          Fill out the form below
        </p>
        <form action="" className="self-stretch space-y-3">
          <div className="">
            <label htmlFor="name" className="text-sm sr-only">Your name</label>
            <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring border border-primary-300 p-3" />
          </div>
          <div className="">
            <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
            <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring border border-primary-300 p-3" />
          </div>
          <div className="">
            <label htmlFor="message" className="text-sm sr-only">Message</label>
            <textarea  id="message" placeholder="Enter message" className="w-full rounded-md focus:ring border border-primary-300 p-3" rows={5}/>
          </div>
          <button type="button" className="w-full py-2 font-semibold rounded bg-seagreen text-secondary">Submit</button>
        </form>
      </div>
      <img src="https://images.unsplash.com/photo-1713947506934-c0b6519e069d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
    </div>
  </section>
  </>
  );
}
