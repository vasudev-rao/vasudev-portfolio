export interface TechCategory {
  category: string
  icon: string
  technologies: Technology[]
}

export interface Technology {
  name: string
  proficiency: 'Expert' | 'Advanced' | 'Intermediate'
  yearsOfExperience?: number
}

export const techStack: TechCategory[] = [
  {
    category: 'Data Processing',
    icon: '⚡',
    technologies: [
      { name: 'Apache Spark', proficiency: 'Expert', yearsOfExperience: 6 },
      { name: 'PySpark', proficiency: 'Expert', yearsOfExperience: 6 },
      { name: 'Scala', proficiency: 'Advanced', yearsOfExperience: 4 },
      { name: 'Python', proficiency: 'Expert', yearsOfExperience: 7 },
      { name: 'Apache Kafka', proficiency: 'Advanced', yearsOfExperience: 3 },
      { name: 'Apache Airflow', proficiency: 'Expert', yearsOfExperience: 5 },
      { name: 'dbt', proficiency: 'Advanced', yearsOfExperience: 2 }
    ]
  },
  {
    category: 'Platforms & Frameworks',
    icon: '🏗️',
    technologies: [
      { name: 'Databricks', proficiency: 'Expert', yearsOfExperience: 4 },
      { name: 'Delta Lake', proficiency: 'Expert', yearsOfExperience: 4 },
      { name: 'AWS EMR', proficiency: 'Advanced', yearsOfExperience: 5 },
      { name: 'AWS Glue', proficiency: 'Advanced', yearsOfExperience: 4 },
      { name: 'Docker', proficiency: 'Advanced', yearsOfExperience: 4 },
      { name: 'Kubernetes', proficiency: 'Intermediate', yearsOfExperience: 2 }
    ]
  },
  {
    category: 'Databases & Storage',
    icon: '💾',
    technologies: [
      { name: 'PostgreSQL', proficiency: 'Expert', yearsOfExperience: 7 },
      { name: 'Snowflake', proficiency: 'Advanced', yearsOfExperience: 4 },
      { name: 'Redshift', proficiency: 'Advanced', yearsOfExperience: 5 },
      { name: 'MongoDB', proficiency: 'Intermediate', yearsOfExperience: 3 },
      { name: 'Redis', proficiency: 'Advanced', yearsOfExperience: 3 },
      { name: 'Cassandra', proficiency: 'Intermediate', yearsOfExperience: 2 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    technologies: [
      { name: 'AWS (S3, EC2, Lambda, etc.)', proficiency: 'Expert', yearsOfExperience: 6 },
      { name: 'Azure', proficiency: 'Intermediate', yearsOfExperience: 2 },
      { name: 'GCP', proficiency: 'Intermediate', yearsOfExperience: 1 },
      { name: 'Terraform', proficiency: 'Advanced', yearsOfExperience: 3 },
      { name: 'CI/CD (Jenkins, GitHub Actions)', proficiency: 'Advanced', yearsOfExperience: 4 },
      { name: 'Git', proficiency: 'Expert', yearsOfExperience: 7 }
    ]
  },
  {
    category: 'Data Quality & Governance',
    icon: '✅',
    technologies: [
      { name: 'Great Expectations', proficiency: 'Advanced', yearsOfExperience: 3 },
      { name: 'Unity Catalog', proficiency: 'Advanced', yearsOfExperience: 2 },
      { name: 'Apache Atlas', proficiency: 'Intermediate', yearsOfExperience: 2 },
      { name: 'Data Build Tool (dbt)', proficiency: 'Advanced', yearsOfExperience: 2 }
    ]
  },
  {
    category: 'Machine Learning & Analytics',
    icon: '🤖',
    technologies: [
      { name: 'MLflow', proficiency: 'Advanced', yearsOfExperience: 3 },
      { name: 'Feast (Feature Store)', proficiency: 'Advanced', yearsOfExperience: 2 },
      { name: 'Pandas', proficiency: 'Expert', yearsOfExperience: 6 },
      { name: 'SQL', proficiency: 'Expert', yearsOfExperience: 7 },
      { name: 'Tableau', proficiency: 'Advanced', yearsOfExperience: 5 },
      { name: 'Power BI', proficiency: 'Intermediate', yearsOfExperience: 3 }
    ]
  }
]
