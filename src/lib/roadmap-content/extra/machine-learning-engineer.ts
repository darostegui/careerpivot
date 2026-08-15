import type { RoadmapContent } from "../types";

export const machineLearningEngineerContent: RoadmapContent = {
  roleSlug: "machine-learning-engineer",
  roleTitle: "Machine Learning Engineer",
  topics: [
    {
      id: "ml-foundations",
      title: "Machine learning foundations",
      outcome:
        "Frame a prediction problem correctly, establish a meaningful baseline, and evaluate models without leaking future or test information.",
      studyPlan: [
        "Define the decision, label timing, and cost of errors.",
        "Compare naive and learned baselines with a time-aware split.",
        "Inspect calibration and subgroup confusion before thresholding."
      ],
      project:
        "Complete the scenario as a experiment brief, threshold table, and error gallery; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "An Introduction to Statistical Learning",
          provider: "Springer",
          url: "https://www.statlearning.com/",
          access: "Free",
          format: "Documentation",
          note: "Free textbook and labs covering supervised learning, resampling, trees, and unsupervised methods.",
        },
        {
          title: "scikit-learn User Guide",
          provider: "scikit-learn",
          url: "https://scikit-learn.org/stable/user_guide.html",
          access: "Free",
          format: "Documentation",
          note: "Practical reference for estimators, preprocessing, model selection, metrics, and inspection.",
        },
        {
          title: "Google Machine Learning Crash Course",
          provider: "Google",
          url: "https://developers.google.com/machine-learning/crash-course",
          access: "Free",
          format: "Course",
          note: "Interactive fundamentals with exercises on data, models, metrics, and responsible deployment.",
        },
      ],
      checkpoint:
        "The recommendation beats the baseline for the stated decision and identifies cases requiring human review.",
    },
    {
      id: "data-features",
      title: "Data and feature pipelines",
      outcome:
        "Turn raw, changing data into reproducible features with clear point-in-time semantics, validation, and lineage.",
      studyPlan: [
        "Audit feature availability and every potentially leaky join.",
        "Version transformations and inject missing, duplicate, and drifted inputs.",
        "Compare offline features with a serving fixture."
      ],
      project:
        "Complete the scenario as a feature lineage notebook and parity test; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Feature Engineering for Machine Learning",
          provider: "Google Cloud",
          url: "https://developers.google.com/machine-learning/data-prep",
          access: "Free",
          format: "Course",
          note: "Practical guidance for preparing data, creating features, and avoiding leakage.",
        },
        {
          title: "Feast Documentation",
          provider: "Feast",
          url: "https://docs.feast.dev/",
          access: "Free",
          format: "Documentation",
          note: "Open-source feature-store reference for offline, online, and point-in-time retrieval.",
        },
        {
          title: "Pandera Documentation",
          provider: "Pandera",
          url: "https://pandera.readthedocs.io/",
          access: "Free",
          format: "Practice",
          note: "Python schema-validation patterns for making data assumptions executable.",
        },
      ],
      checkpoint:
        "A future-dated or malformed record fails before training, and serving parity is demonstrated.",
    },
    {
      id: "deep-learning",
      title: "Deep learning",
      outcome:
        "Train and debug a modest neural model while understanding optimization, representation, overfitting, and the limits of the data.",
      studyPlan: [
        "Form an error taxonomy before tuning.",
        "Track seeded, one-change experiments with data versions.",
        "Use learning curves and representative errors to choose data or model work."
      ],
      project:
        "Complete the scenario as a experiment poster and uncertainty examples; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Dive into Deep Learning",
          provider: "D2L",
          url: "https://d2l.ai/",
          access: "Free",
          format: "Course",
          note: "Interactive textbook connecting mathematical ideas to executable deep-learning notebooks.",
        },
        {
          title: "PyTorch Tutorials",
          provider: "PyTorch",
          url: "https://pytorch.org/tutorials/",
          access: "Free",
          format: "Practice",
          note: "Official examples for tensors, training loops, vision, deployment, and debugging.",
        },
        {
          title: "Weights & Biases Reports",
          provider: "Weights & Biases",
          url: "https://wandb.ai/site/experiment-tracking/",
          access: "Free",
          format: "Documentation",
          note: "Optional reference for experiment tracking and comparing training runs.",
        },
      ],
      checkpoint:
        "The experiment poster justifies the next action from errors and uncertainty, not score alone.",
    },
    {
      id: "ml-serving",
      title: "Model serving",
      outcome:
        "Package a model behind a reliable interface with validated inputs, reproducible artifacts, latency expectations, and safe rollout behavior.",
      studyPlan: [
        "Define rejected inputs, timeout behavior, version, and privacy boundaries.",
        "Benchmark payloads and resource limits separately from accuracy.",
        "Exercise canary and rollback with an incompatible artifact."
      ],
      project:
        "Complete the scenario as a API contract, load-test report, and canary transcript; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "FastAPI Documentation",
          provider: "FastAPI",
          url: "https://fastapi.tiangolo.com/",
          access: "Free",
          format: "Documentation",
          note: "Practical reference for typed Python APIs, validation, documentation, and testing.",
        },
        {
          title: "MLflow Documentation",
          provider: "MLflow",
          url: "https://mlflow.org/docs/latest/",
          access: "Free",
          format: "Documentation",
          note: "Reference for tracking runs, packaging models, registries, and deployment workflows.",
        },
        {
          title: "BentoML Documentation",
          provider: "BentoML",
          url: "https://docs.bentoml.com/",
          access: "Free",
          format: "Practice",
          note: "Optional hands-on path for packaging and serving machine-learning models.",
        },
      ],
      checkpoint:
        "A clean checkout identifies the model artifact, rejects bad input, and meets the stated latency test.",
    },
    {
      id: "mlops-monitoring",
      title: "MLOps and monitoring",
      outcome:
        "Keep a model useful after launch by monitoring data, predictions, performance proxies, fairness signals, and retraining decisions.",
      studyPlan: [
        "Choose signals for service health, drift, predictions, and delayed labels.",
        "Simulate drift, label delay, and broken features; classify alerts.",
        "Write intended use, non-goals, and retraining stop conditions."
      ],
      project:
        "Complete the scenario as a model card, alert triage sheet, and retraining memo; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Machine Learning Operations (MLOps)",
          provider: "Google Cloud",
          url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning",
          access: "Free",
          format: "Documentation",
          note: "Detailed reference for continuous delivery, validation, monitoring, and automation in ML systems.",
        },
        {
          title: "Evidently Documentation",
          provider: "Evidently AI",
          url: "https://docs.evidentlyai.com/",
          access: "Free",
          format: "Practice",
          note: "Open-source tooling and examples for data drift, model performance, and monitoring reports.",
        },
        {
          title: "Model Cards for Model Reporting",
          provider: "Google Research",
          url: "https://modelcards.withgoogle.com/about",
          access: "Free",
          format: "Documentation",
          note: "Guidance for documenting intended use, evaluation conditions, and limitations.",
        },
      ],
      checkpoint:
        "Alert triage separates data outage, service issue, and model degradation with evidence.",
    },
  ],
};
