
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
        <form action="https://formspree.io/f/xvglqolo" className="self-stretch space-y-3" method="post">
          <div className="">
            <label htmlFor="name" className="text-sm sr-only">Your name</label>
            <input id="name" name="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring border border-primary-300 p-3" />
          </div>
          <div className="">
            <label htmlFor="email" className="text-sm sr-only">Email address</label>
            <input id="email" name="email" type="email" placeholder="Email address" className="w-full rounded-md focus:ring border border-primary-300 p-3" />
          </div>
          <div className="">
            <label htmlFor="message" className="text-sm sr-only">Message</label>
            <textarea name="message" id="message" placeholder="Enter message" className="w-full rounded-md focus:ring border border-primary-300 p-3" rows={5}/>
          </div>
          <button type="submit" className="w-full py-2 font-semibold rounded bg-seagreen text-secondary">Submit</button>
        </form>
      </div>
      <img src="/students.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3" />
    </div>
  </section>
  </>
  );
}
