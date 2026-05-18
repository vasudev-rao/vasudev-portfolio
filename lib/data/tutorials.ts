export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type TopicName =
  | 'Python'
  | 'SQL'
  | 'PySpark'
  | 'Databricks'
  | 'System Design'
  | 'DSA'
  | 'Data Engineering'
  | 'AI & ML'

export interface Tutorial {
  id: string
  title: string
  description: string
  difficulty: Difficulty
  duration: string
  topic: TopicName
  tags: string[]
  slug: string
  comingSoon?: boolean
  pdf?: {
    url: string
    label?: string
    size?: string
  }
}

export const tutorials: Tutorial[] = [

  // ── Python ──────────────────────────────────────────────
  {
    id: 'py-1',
    title: 'Python for Data Engineers',
    description: 'Core Python concepts every data engineer needs — generators, decorators, context managers, and writing clean, production-ready scripts.',
    difficulty: 'Beginner',
    duration: '45 min',
    topic: 'Python',
    tags: ['Python', 'Fundamentals'],
    slug: 'python-for-data-engineers',
  },
  {
    id: 'py-2',
    title: 'Advanced Python: Concurrency & Async',
    description: 'Threading, multiprocessing, and asyncio patterns for building fast data pipelines. Covers concurrent API calls and parallel file processing.',
    difficulty: 'Advanced',
    duration: '60 min',
    topic: 'Python',
    tags: ['Python', 'Async', 'Performance'],
    slug: 'python-concurrency-async',
  },
  {
    id: 'py-3',
    title: 'Python Data Classes & Pydantic',
    description: 'Build type-safe data pipelines using dataclasses and Pydantic models for schema validation, serialization, and config management.',
    difficulty: 'Intermediate',
    duration: '30 min',
    topic: 'Python',
    tags: ['Python', 'Pydantic', 'Type Safety'],
    slug: 'python-dataclasses-pydantic',
  },

  // ── SQL ─────────────────────────────────────────────────
  {
    id: 'sql-1',
    title: 'SQL Fundamentals for Data Engineers',
    description: "Master SELECT, JOINs, GROUP BY, window functions, and CTEs. The SQL patterns you'll use every single day in production.",
    difficulty: 'Beginner',
    duration: '50 min',
    topic: 'SQL',
    tags: ['SQL', 'Fundamentals'],
    slug: 'sql-fundamentals',
  },
  {
    id: 'sql-2',
    title: 'Advanced SQL: Window Functions Deep Dive',
    description: 'ROW_NUMBER, RANK, LAG, LEAD, NTILE and running totals. Real-world examples on financial and event data with performance tips.',
    difficulty: 'Intermediate',
    duration: '45 min',
    topic: 'SQL',
    tags: ['SQL', 'Window Functions', 'Analytics'],
    slug: 'sql-window-functions',
  },
  {
    id: 'sql-3',
    title: 'Query Optimization & Execution Plans',
    description: 'How to read EXPLAIN plans, understand indexes, partition pruning, and rewrite slow queries for 10x performance gains.',
    difficulty: 'Advanced',
    duration: '60 min',
    topic: 'SQL',
    tags: ['SQL', 'Performance', 'Optimization'],
    slug: 'sql-query-optimization',
  },

  // ── PySpark ─────────────────────────────────────────────
  {
    id: 'spark-1',
    title: 'PySpark Getting Started',
    description: 'SparkSession, DataFrames, transformations vs actions, lazy evaluation, and your first PySpark pipeline from scratch.',
    difficulty: 'Beginner',
    duration: '55 min',
    topic: 'PySpark',
    tags: ['PySpark', 'Spark', 'Getting Started'],
    slug: 'pyspark-getting-started',
  },
  {
    id: 'spark-2',
    title: 'Spark Performance Tuning',
    description: 'Partitioning strategies, broadcast joins, shuffle optimization, caching, and Spark UI deep dive for production-grade pipelines.',
    difficulty: 'Advanced',
    duration: '75 min',
    topic: 'PySpark',
    tags: ['PySpark', 'Performance', 'Tuning'],
    slug: 'spark-performance-tuning',
  },
  {
    id: 'spark-3',
    title: 'Spark Structured Streaming',
    description: 'Build real-time pipelines with Spark Structured Streaming — watermarks, triggers, output modes, and exactly-once guarantees.',
    difficulty: 'Advanced',
    duration: '70 min',
    topic: 'PySpark',
    tags: ['PySpark', 'Streaming', 'Kafka'],
    slug: 'spark-structured-streaming',
  },

  // ── Databricks ──────────────────────────────────────────
  {
    id: 'db-1',
    title: 'Databricks Platform Overview',
    description: 'Clusters, notebooks, jobs, Unity Catalog, and DBFS. Everything you need to be productive on the Databricks Lakehouse Platform.',
    difficulty: 'Beginner',
    duration: '40 min',
    topic: 'Databricks',
    tags: ['Databricks', 'Delta Lake', 'Lakehouse'],
    slug: 'databricks-platform-overview',
  },
  {
    id: 'db-2',
    title: 'Delta Lake: ACID Transactions & Time Travel',
    description: 'How Delta Lake works under the hood — transaction logs, MERGE operations, schema evolution, and time travel queries.',
    difficulty: 'Intermediate',
    duration: '55 min',
    topic: 'Databricks',
    tags: ['Databricks', 'Delta Lake', 'ACID'],
    slug: 'delta-lake-deep-dive',
  },
  {
    id: 'db-3',
    title: 'Medallion Architecture on Databricks',
    description: 'Design and implement Bronze, Silver, Gold layers using Delta Live Tables, Auto Loader, and Unity Catalog for enterprise lakehouses.',
    difficulty: 'Advanced',
    duration: '90 min',
    topic: 'Databricks',
    tags: ['Databricks', 'Medallion', 'Architecture'],
    slug: 'medallion-architecture-databricks',
  },

  // ── System Design ────────────────────────────────────────
  {
    id: 'sd-1',
    title: 'Data Pipeline System Design',
    description: 'How to design scalable ETL/ELT pipelines — batch vs streaming trade-offs, idempotency, backfill strategies, and SLA design.',
    difficulty: 'Intermediate',
    duration: '60 min',
    topic: 'System Design',
    tags: ['System Design', 'Architecture', 'Pipelines'],
    slug: 'data-pipeline-system-design',
  },
  {
    id: 'sd-2',
    title: 'Designing a Data Lakehouse from Scratch',
    description: 'End-to-end system design for a production lakehouse — ingestion, storage format, compute, governance, and serving layer.',
    difficulty: 'Advanced',
    duration: '80 min',
    topic: 'System Design',
    tags: ['System Design', 'Lakehouse', 'Architecture'],
    slug: 'lakehouse-system-design',
  },
  {
    id: 'sd-3',
    title: 'Real-Time Streaming Architecture',
    description: 'Design a low-latency event streaming system using Kafka, Spark Streaming, and Delta Lake with exactly-once delivery guarantees.',
    difficulty: 'Advanced',
    duration: '75 min',
    topic: 'System Design',
    tags: ['System Design', 'Kafka', 'Streaming'],
    slug: 'streaming-architecture-design',
    comingSoon: true,
  },

  // ── DSA ─────────────────────────────────────────────────
  {
    id: 'dsa-1',
    title: 'DSA for Data Engineering Interviews',
    description: 'The data structures and algorithms patterns that actually come up in data engineering interviews — arrays, hashmaps, graphs, and sorting.',
    difficulty: 'Intermediate',
    duration: '65 min',
    topic: 'DSA',
    tags: ['DSA', 'Interviews', 'Algorithms'],
    slug: 'dsa-data-engineering-interviews',
  },
  {
    id: 'dsa-2',
    title: 'Graph Algorithms for Data Lineage',
    description: 'BFS, DFS, topological sort and how they power DAG scheduling in Airflow, data lineage tracking, and dependency resolution.',
    difficulty: 'Advanced',
    duration: '55 min',
    topic: 'DSA',
    tags: ['DSA', 'Graphs', 'Airflow'],
    slug: 'graph-algorithms-data-lineage',
  },

  // ── Data Engineering ─────────────────────────────────────
  {
    id: 'de-1',
    title: 'Data Modeling: Dimensional & Data Vault',
    description: 'Star schema, snowflake schema, and Data Vault 2.0 — when to use each, trade-offs, and hands-on dbt implementation.',
    difficulty: 'Intermediate',
    duration: '60 min',
    topic: 'Data Engineering',
    tags: ['Data Modeling', 'dbt', 'Warehouse'],
    slug: 'data-modeling-dimensional-vault',
  },
  {
    id: 'de-2',
    title: 'Apache Kafka for Data Engineers',
    description: 'Topics, partitions, consumer groups, offsets, and schema registry. Build a production-grade Kafka pipeline step by step.',
    difficulty: 'Intermediate',
    duration: '70 min',
    topic: 'Data Engineering',
    tags: ['Kafka', 'Streaming', 'Real-time'],
    slug: 'kafka-for-data-engineers',
  },
  {
    id: 'de-3',
    title: 'Data Quality with Great Expectations',
    description: 'Write data contracts, define expectations, set up checkpoints, and integrate quality gates into your Airflow DAGs.',
    difficulty: 'Intermediate',
    duration: '50 min',
    topic: 'Data Engineering',
    tags: ['Data Quality', 'Great Expectations', 'Airflow'],
    slug: 'data-quality-great-expectations',
  },
  {
    id: 'de-4',
    title: 'Apache Airflow: Production DAGs',
    description: 'DAG design patterns, dynamic task generation, XComs, sensors, SLA alerts, and CI/CD for Airflow in production.',
    difficulty: 'Advanced',
    duration: '80 min',
    topic: 'Data Engineering',
    tags: ['Airflow', 'Orchestration', 'CI/CD'],
    slug: 'airflow-production-dags',
  },
]

export const topics: (TopicName | 'All')[] = [
  'All',
  'Python',
  'SQL',
  'PySpark',
  'Databricks',
  'System Design',
  'DSA',
  'Data Engineering',
  'AI & ML',
]

export const difficultyOrder: Record<Difficulty, number> = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
}
