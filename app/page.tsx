import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hi, I’m Kelly 👋</h1>

      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
        I bring a unique blend of legal operations and tech-forward consulting experience—rooted in years working
        with law firms and evolving into a consulting role with a focus on client success, administration,
        and document management. Whether I’m streamlining backend systems, writing clear technical documentation,
        or building solutions that keep teams aligned, I’m driven by a love of organized systems and excellent service.
      </p>

      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
        Currently, I consult with Pueo Business Solutions in the Washington DC area, where I help organizations improve
        how they manage information and serve their clients. Previously, I was the Director of Administration and Client
        Happiness at Great Legal Marketing, where I combined operations leadership with a deep focus on user and customer experience.
      </p>

      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
        Outside of work, I’m a Brevard College graduate, former student-athlete (soccer & lacrosse), and an Alpha Pi Sigma & SAAC leader.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
