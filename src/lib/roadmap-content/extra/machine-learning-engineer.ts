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
        "Define the decision, unit of prediction, label timing, costs of errors, and a baseline that a model must beat.",
        "Prepare train, validation, and test splits that match deployment time and grouping constraints.",
        "Compare linear, tree-based, and regularized models while tracking preprocessing and feature choices.",
        "Inspect calibration, threshold trade-offs, subgroup performance, and failure examples before selecting a model.",
      ],
      project:
        "Build a delayed-payment risk model for a fictional subscription service, using a time-aware split, cost-weighted evaluation, calibrated scores, and a decision memo.",
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
        "A reproducible report compares the baseline with two models, justifies the split and metric, shows calibration or threshold analysis, and names three failure modes.",
    },
    {
      id: "data-features",
      title: "Data and feature pipelines",
      outcome:
        "Turn raw, changing data into reproducible features with clear point-in-time semantics, validation, and lineage.",
      studyPlan: [
        "Audit source data for leakage, missingness, drift, duplicates, timestamps, and fields unavailable at prediction time.",
        "Implement transformations as versioned code with explicit schemas, reusable feature definitions, and deterministic outputs.",
        "Use point-in-time joins and train-serving parity checks for features derived from historical events.",
        "Add data-quality tests, feature distributions, lineage notes, and a backfill procedure before training again.",
      ],
      project:
        "Create a point-in-time feature pipeline for the risk model, including source snapshots, feature definitions, validation checks, and a comparison of offline and serving values.",
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
        "A fresh run produces versioned features, fails on an injected schema or timestamp problem, and demonstrates that one training feature matches its point-in-time serving value.",
    },
    {
      id: "deep-learning",
      title: "Deep learning",
      outcome:
        "Train and debug a modest neural model while understanding optimization, representation, overfitting, and the limits of the data.",
      studyPlan: [
        "Review tensors, gradient descent, loss functions, activations, batching, regularization, and validation curves.",
        "Build a small model in a modern framework, establish a reproducible training configuration, and track experiments.",
        "Diagnose underfitting, overfitting, unstable training, class imbalance, and data-label problems with targeted changes.",
        "Compare the neural model with a simpler baseline and inspect examples where each approach succeeds or fails.",
      ],
      project:
        "Train an image classifier that sorts recyclable materials, with augmentation, class-balanced evaluation, experiment logs, and a short analysis of ambiguous examples.",
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
        "A tracked experiment reaches a stated validation target, includes a baseline comparison, plots learning curves, and explains five representative errors.",
    },
    {
      id: "ml-serving",
      title: "Model serving",
      outcome:
        "Package a model behind a reliable interface with validated inputs, reproducible artifacts, latency expectations, and safe rollout behavior.",
      studyPlan: [
        "Separate training code, model artifact, preprocessing, inference logic, and API contract so each can be tested independently.",
        "Implement input validation, versioned serialization, health checks, structured prediction logs, and privacy-aware observability.",
        "Measure cold-start and steady-state latency, throughput, memory, and resource cost with realistic payloads.",
        "Deploy a shadow or canary path, define rollback criteria, and verify the service against a known evaluation set.",
      ],
      project:
        "Serve the recycling classifier through a versioned prediction API, containerize it, benchmark latency, add schema validation, and demonstrate a rollback from a deliberately bad model artifact.",
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
        "A clean checkout starts the service, rejects an invalid payload, reports p50 and p95 latency on a stated workload, and passes a versioned-model smoke test.",
    },
    {
      id: "mlops-monitoring",
      title: "MLOps and monitoring",
      outcome:
        "Keep a model useful after launch by monitoring data, predictions, performance proxies, fairness signals, and retraining decisions.",
      studyPlan: [
        "Map the model lifecycle from data snapshot and training run through approval, deployment, monitoring, retraining, and retirement.",
        "Define input drift, prediction drift, delayed-label performance, slice metrics, service health, and alert ownership.",
        "Create a model card with intended use, limitations, data provenance, evaluation, and known risks.",
        "Simulate drift or degraded labels, investigate the signal, and choose between rollback, recalibration, retraining, or no action.",
      ],
      project:
        "Build a monitoring report for the risk model with drift checks, delayed outcome evaluation, subgroup metrics, a model card, and a retraining decision log.",
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
        "A monitoring run detects an injected distribution shift, separates service failure from model-quality risk, and records a justified operational response with evidence.",
    },
  ],
};
