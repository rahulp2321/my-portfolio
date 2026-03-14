function Projects() {
  return (
    <section className="projects">

      <h2 className="project-title">My DevOps Projects</h2>

      <div className="project-grid">

        <div className="project-card blue">
          <h3>Deploying a Web Project with Kubernetes Manifests</h3>
          <p>
            Detailed steps for deploying a full-stack web application
            using Kubernetes YAML manifests.
          </p>
        </div>

        <div className="project-card green">
          <h3>Deploying a Web Project with Helm Charts</h3>
          <p>
            Exploration of using Helm charts for simplified deployment
            and management of Kubernetes applications.
          </p>
        </div>

        <div className="project-card purple">
          <h3>Implementing a CI Workflow with GitHub Actions</h3>
          <p>
            Demonstration of CI pipeline using GitHub Actions for
            automated testing and Docker builds.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Projects