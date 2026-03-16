function Projects() {
  return (
    <section className="projects">

      <h2 className="project-title">My DevOps Projects</h2>

      <div className="project-grid">

        <div className="project-card blue">
          <h3>Deploying a Web Project with Kubernetes Manifests</h3>
          <p>
            Detailed steps for deploying a .Net core web application
            using Kubernetes YAML manifests.
          </p>
        </div>

        <div className="project-card green">
          <h3>Deploying a Web Project with Linux Server using Nginx</h3>
          <p>
            Detailed steps for deploying a .Net core web application on Rocky linux .
          </p>
        </div>

        <div className="project-card purple">
          <h3>Implementing a CICD Workflow with Jenkins and Azure DevOps</h3>
          <p>
            Demonstration of CICD pipeline using Jenkins and Azure DevOps for
            automated testing, Docker builds and Deployment at client server.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Projects
