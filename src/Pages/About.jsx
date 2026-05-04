import React from 'react'

const About = () => {
  return (
    <div>
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-center text-3xl font-bold text-gray-900">About RepoSpec</h1>

          <div className="mt-8 text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-6">RepoSpec is a curated directory of specialized GitHub repositories. We help developers discover high-signal, focused open-source projects without the noise of mass platforms.</p>

            <p className="mb-6">Every repository on RepoSpec is manually selected and described so you know exactly what it does before diving in.</p>

            <p className="mb-6">Whether you're looking for a specific tool, a new library, or an interesting project to contribute to, RepoSpec makes it easy to find exactly what you need.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
