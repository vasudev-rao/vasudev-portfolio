export interface Project {
  slug: string
  title: string
  description: string
  problem: string
  solution: string
  tech: string[]
  impact: string
  github?: string
  architecture?: string
  challenges?: string[]
  dataFlow?: string
}

export const projects: Project[] = [
  {
    slug: 'kafka-spark-streaming-pipeline',
    title: '10M Events/Day Kafka → Spark Streaming Pipeline',
    description: 'Production Kafka → Spark Structured Streaming pipeline processing 10M+ events/day with exactly-once delivery to Delta Lake. Watermark-based late-event handling, idempotent MERGE upserts, and dead-letter queue with automatic replay. Reduced end-to-end latency from 8 minutes to under 5 seconds.',
    problem: 'Batch processing caused 8-minute data delays, making real-time analytics impossible. No exactly-once guarantees led to duplicate records. Late-arriving events were dropped, causing data loss. System had no fault tolerance for malformed messages.',
    solution: 'Built Kafka → Spark Structured Streaming pipeline with 30-minute watermark tolerance for late events. Implemented exactly-once semantics via idempotent MERGE operations into Delta Lake. Added dead-letter queue for poison messages with automated replay. Deployed on AWS EMR with auto-scaling.',
    tech: ['Apache Kafka', 'Spark Structured Streaming', 'Delta Lake', 'PySpark', 'AWS EMR', 'Python'],
    impact: 'Sub-5s end-to-end latency (from 8min), 10M+ events/day throughput, 0 data loss with exactly-once delivery, 99.9% uptime',
    github: 'https://github.com/vasudev-rao',
    architecture: 'Kafka (RF=3, 12 partitions) → Spark Structured Streaming (watermarks + micro-batches) → Delta Lake (MERGE upserts) → Looker dashboards',
    challenges: [
      'Handling late-arriving events with 30-minute watermark while maintaining exactly-once semantics',
      'Idempotent MERGE operations to prevent duplicates during Spark job restarts',
      'Managing state checkpoints on S3 for fault tolerance and recovery',
      'Auto-scaling EMR clusters based on Kafka consumer lag without dropping events'
    ],
    dataFlow: 'Event Sources → Kafka Topics (partitioned by key) → Spark SS (watermarking + dedup) → Delta Lake → BI Tools (< 5s freshness)'
  },
  {
    slug: 'databricks-medallion-lakehouse',
    title: 'Enterprise Lakehouse — Databricks Medallion Architecture',
    description: 'Unified 50+ isolated AWS Glue jobs into a Databricks Delta Lake medallion architecture (Bronze/Silver/Gold). Unity Catalog for governance, dbt for schema contracts, Photon-powered Gold layer. Achieved 60% pipeline runtime reduction and eliminated schema conflicts across 8 engineering teams.',
    problem: 'Fragmented multi-warehouse topology with 50+ isolated AWS Glue jobs across 8 teams. No shared catalog led to constant schema conflicts. Full table refreshes caused 6+ hour batch windows. No data quality gates led to bad data reaching production.',
    solution: 'Implemented Databricks medallion architecture: Bronze layer for raw ingestion with CDC, Silver layer with dbt schema contracts and Great Expectations quality gates, Gold layer with Photon engine for BI. Unity Catalog provided centralized governance and lineage tracking.',
    tech: ['Databricks', 'Delta Lake', 'PySpark', 'Unity Catalog', 'dbt', 'Apache Spark', 'Great Expectations', 'AWS S3'],
    impact: '60% pipeline runtime reduction, 50+ sources unified, 0 schema conflicts, full data lineage with Unity Catalog',
    github: 'https://github.com/vasudev-rao',
    architecture: 'Raw Sources (Kafka, S3, APIs, CDC) → Bronze (Delta raw) → Silver (dbt + DQ checks) → Gold (Photon KPIs) → Unity Catalog lineage',
    challenges: [
      'Migrating 50+ legacy Glue jobs to unified architecture without business disruption',
      'Establishing dbt contract testing patterns that scale across 8 teams',
      'Implementing automated data quality gates using Great Expectations at scale',
      'Optimizing Delta Lake file sizes and partition strategies for Photon engine'
    ],
    dataFlow: 'Multi-source ingestion → Bronze Delta (CDC + raw) → Silver Delta (validated + typed) → Gold Delta (aggregated + optimized) → BI/ML consumption'
  },
  {
    slug: '100tb-warehouse-migration',
    title: '100TB Warehouse Migration — Redshift & Oracle → Snowflake + BigQuery',
    description: 'Led migration of 100+ TB from on-premise Oracle and legacy AWS Redshift to Snowflake and BigQuery using dual-write validation strategy. Re-modeled physical layer with micro-partition clustering and incremental ELT using dbt. Achieved 70% query performance improvement (p95: 42s → 11s) and 40% cost reduction with zero-downtime cutover.',
    problem: 'Legacy Oracle and Redshift infrastructure struggling with growing data volumes. T+1 batch windows causing business delays. P95 query times at 42 seconds. No proper incremental ETL patterns. Rising infrastructure costs.',
    solution: 'Implemented dual-write validation strategy allowing zero-downtime cutover. Re-architected physical data model with micro-partition clustering for Snowflake and column ordering for BigQuery. Converted all pipelines to incremental ELT using dbt. Established automated data validation framework.',
    tech: ['Snowflake', 'BigQuery', 'dbt', 'Apache Airflow', 'Airbyte', 'Python', 'SQL'],
    impact: '70% query performance improvement (p95: 42s → 11s), 40% cost reduction, 100TB migrated with zero downtime',
    github: 'https://github.com/vasudev-rao',
    architecture: 'Source Systems (Oracle + Redshift) → Dual-write validation → Snowflake (micro-partitions) + BigQuery (columnar) → dbt incremental ELT → BI layer',
    challenges: [
      'Ensuring data consistency during dual-write phase across 100+ tables',
      'Optimizing Snowflake clustering keys and BigQuery partitioning for query patterns',
      'Converting complex stored procedures to dbt models while maintaining logic',
      'Achieving zero-downtime cutover with rollback plan for critical business operations'
    ],
    dataFlow: 'Legacy sources → Dual-write sync → Modern warehouses (Snowflake + BigQuery) → dbt transformations → Production analytics'
  },
  {
    slug: 'ml-feature-store-dual-mode',
    title: 'ML Feature Store — 1,000+ Features, p99 < 8ms Online Serving',
    description: 'Centralized dual-mode feature platform on Databricks: Delta Lake offline store (point-in-time correct for training) and Redis online store (p99 < 8ms for inference). Eliminated training-serving skew across 4 ML teams, reduced feature engineering time from days to hours.',
    problem: 'Data scientists recreating similar features across models causing inconsistency. No feature versioning led to model reproducibility issues. Training-serving skew between batch and online features. No central feature discovery or reuse.',
    solution: 'Built Databricks Feature Store with dual-mode serving: Delta Lake for offline training (point-in-time correctness) and Redis for online inference (< 8ms p99). MLflow for feature lineage and versioning. Automated materialization pipelines with PySpark.',
    tech: ['Databricks Feature Store', 'MLflow', 'PySpark', 'Redis', 'Delta Lake', 'Apache Spark'],
    impact: '1,000+ features centralized, 4 ML teams served, p99 < 8ms online latency, 0 training-serving skew, feature dev time: days → hours',
    github: 'https://github.com/vasudev-rao',
    architecture: 'Feature Pipelines (PySpark) → Offline Store (Delta Lake + point-in-time) → Online Store (Redis cluster) → ML Training + Inference',
    challenges: [
      'Ensuring point-in-time correctness for historical feature lookups in training',
      'Sub-10ms p99 latency requirements for online serving with Redis clustering',
      'Automated materialization ensuring offline/online feature parity',
      'Feature freshness monitoring and automated backfill pipelines'
    ],
    dataFlow: 'Raw Data → Feature Engineering (PySpark) → Delta Lake (offline) + Redis (online) → ML Models (training + inference)'
  },
  {
    slug: 'real-time-credit-decisioning',
    title: 'Real-Time Credit Decisioning — 48h Batch → < 2min Streaming',
    description: 'Replaced overnight batch credit scoring with Kafka-driven real-time pipeline. PySpark micro-batch feature engineering computes 200+ credit risk signals in real time, integrated with REST model serving layer. Reduced decisioning latency from 48 hours to under 2 minutes while maintaining 95%+ model accuracy at 100K+ applications/day.',
    problem: 'Overnight batch credit scoring took 48 hours for decisions. Business losing competitive advantage due to delays. Hard-coded scoring rules couldn\'t adapt. No real-time fraud detection capabilities.',
    solution: 'Built Kafka-driven streaming pipeline with PySpark for real-time feature engineering of 200+ credit risk signals. Integrated with MLflow model serving via REST API. Implemented A/B testing framework and model performance monitoring with automated rollback.',
    tech: ['PySpark', 'Apache Kafka', 'PostgreSQL', 'AWS', 'MLflow', 'Redis', 'Python'],
    impact: 'Decisioning latency: 48h → < 2min, 100K+ applications/day, 95%+ model accuracy maintained, real-time fraud detection',
    github: 'https://github.com/vasudev-rao',
    architecture: 'Application Events (Kafka) → PySpark micro-batch feature engineering → Redis feature cache → MLflow model serving (REST) → Decision output',
    challenges: [
      'Sub-2-minute latency requirement across entire pipeline including external API calls',
      'Real-time computation of 200+ features with proper error handling and fallbacks',
      'Model versioning and safe deployment with A/B testing and automatic rollback',
      'Maintaining 95%+ accuracy while transitioning from batch to streaming scoring'
    ],
    dataFlow: 'Credit Application → Kafka → PySpark (feature engineering) → Redis cache → ML Model → Approve/Deny decision'
  },
  {
    slug: 'cost-optimization-framework',
    title: 'Cost Engineering Framework — 40% Platform Spend Reduction',
    description: 'Automated framework for Spark cluster rightsizing, S3 → Glacier storage tiering, and cross-workspace cost anomaly detection using Isolation Forest ML. Built centralized cost analytics aggregating AWS Cost Explorer, Databricks, and Snowflake usage. Achieved 40% platform spend reduction in 90 days.',
    problem: 'Cloud data costs growing 40% YoY with no visibility into spend drivers. Idle Databricks clusters running 24/7. No automated cost anomaly detection. Teams had no cost accountability or chargeback.',
    solution: 'Developed cost engineering framework with: (1) Automated Spark cluster rightsizing recommendations, (2) S3 lifecycle policies with intelligent tiering, (3) Isolation Forest ML for cost anomaly detection, (4) Team-level chargeback reports with Slack alerts.',
    tech: ['Python', 'Terraform', 'Databricks', 'AWS Cost Explorer', 'GCP', 'Snowflake', 'scikit-learn'],
    impact: '40% platform spend reduction in 90 days, 90% reduction in idle resource costs, full cost attribution per team',
    github: 'https://github.com/vasudev-rao',
    architecture: 'Cost APIs (AWS/Databricks/Snowflake/GCP) → ETL Pipeline (Python) → Cost Database (PostgreSQL) → ML Anomaly Detection → Alerts + Dashboards',
    challenges: [
      'Normalizing cost data across multiple cloud platforms and billing models',
      'Building ML models to detect cost anomalies without excessive false positives',
      'Implementing fair cost allocation for shared resources across teams',
      'Creating actionable recommendations that don\'t disrupt data SLAs'
    ],
    dataFlow: 'Multi-cloud usage data → Normalization + tagging → Anomaly detection (ML) → Recommendations → Team chargeback reports'
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(count: number = 4): Project[] {
  return projects.slice(0, count)
}
