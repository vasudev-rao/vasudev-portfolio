export interface Experience {
  company: string
  role: string
  period: string
  location: string
  achievements: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Fintech Platform',
    role: 'Senior Data Engineer',
    period: '2023 - Present',
    location: 'Remote',
    achievements: [
      'Built Kafka → PySpark real-time credit decisioning pipeline processing 100K+ applications/day',
      'Reduced decisioning latency from 48 hours batch to under 2 minutes streaming',
      'Engineered 200+ credit risk features computed in-flight with 95%+ model accuracy',
      'Implemented exactly-once delivery semantics with watermark-based late-event handling',
      'Designed A/B testing framework for safe model deployment with automatic rollback'
    ],
    tech: ['Kafka', 'PySpark', 'Spark Structured Streaming', 'PostgreSQL', 'AWS', 'MLflow', 'Redis']
  },
  {
    company: 'Enterprise Data Platform',
    role: 'Data Platform Engineer',
    period: '2022 - 2023',
    location: 'Remote',
    achievements: [
      'Unified 50+ isolated AWS Glue jobs into Databricks medallion lakehouse (Bronze/Silver/Gold)',
      'Achieved 60% pipeline runtime reduction with Delta Lake and Photon engine',
      'Implemented Unity Catalog for governance across 8 engineering teams with zero schema conflicts',
      'Built dbt schema contracts and Great Expectations quality gates at Silver layer',
      'Established automated data lineage tracking and cost attribution framework'
    ],
    tech: ['Databricks', 'Delta Lake', 'PySpark', 'Unity Catalog', 'dbt', 'AWS Glue', 'Great Expectations']
  },
  {
    company: 'Cloud Migration Programme',
    role: 'Data Engineering Lead',
    period: '2020 - 2022',
    location: 'Hybrid',
    achievements: [
      'Led 100TB migration from on-premise Oracle + AWS Redshift to Snowflake + BigQuery',
      'Achieved 70% query performance improvement (p95: 42s → 11s) and 40% cost reduction',
      'Implemented dual-write validation strategy enabling zero-downtime cutover',
      'Re-modeled physical layer with micro-partition clustering and incremental ELT via dbt',
      'Established automated data validation framework ensuring consistency during migration'
    ],
    tech: ['Snowflake', 'BigQuery', 'dbt', 'Airflow', 'Airbyte', 'Python', 'Oracle', 'Redshift']
  }
]
