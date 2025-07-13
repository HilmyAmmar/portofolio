export const projects = [
  {
    title: "Lancar - Point of Sale Website",
    subtitle: "Software Engineering Project",
    description:
      "A full-stack POS web app for small businesses (UMKM), built with Django and Next.js to streamline product, transaction, and user management. Completed 4 Agile sprint cycles, contributing to planning, implementation, sprint reviews, and retrospectives",
    highlights:
      "Product and transaction management, user management, financial reporting with export, multi-role access, email invitations, and more.",
    contribution:
      "I focused on developing user management features, including user access listing, email-based invitations with role assignment, and invitation link validation. I also implemented secure authentication using JWT and role-based access control to enhance security and ensure smooth multi-role access. In addition to development, I contributed to planning, design, and the final pitch. I also fixed bugs and assisted in completing tasks across other features when needed.",
    links: ["https://example.com/demo", "https://example.com/github"],
    images: [
      "/image/laporan-keuangan.png",
      "/image/produk-lancar.png",
      "/image/role-akses.png",
      "/image/transaksi-lancar.png",
    ],
    technologies: [
      "Next.js",
      "Django",
      "Typescript",
      "Python",
      "Git",
      "Agile Methodology",
      "EmailJS",
    ],
  },
  {
    title: "Medical Search Engine",
    subtitle: "Information Retrieval Course Project",
    description:
      "A full-stack medical search engine built with Django and React, designed to perform domain-specific document retrieval over a large biomedical corpus using semantic search and LLMs.",
    highlights:
      "Semantic search over NFCorpus, Elasticsearch-powered indexing, query expansion using LLMs, Retrieval-Augmented Generation (RAG), document highlighting, and scalable search interface.",
    contribution:
      "I implemented the full backend architecture using Django, including Elasticsearch integration and scalable RAG-based search API. I built the query expansion logic using Mistral LLM, allowing enriched search terms for better recall. I also designed and optimized the multi-field Elasticsearch search strategy and crafted RAG prompts that guided the LLM to generate accurate and relevant responses. On the frontend, I contributed to integrating React components for displaying highlighted results and search summaries.",
    links: ["https://example.com/demo", "https://example.com/github"],
    images: [
    ],
    technologies: [
      "Django",
      "React",
      "Elasticsearch",
      "Python",
      "LLM",
      "Docker",
      "Tailwind",
      "RAG",
    ],
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Showcasing Projects and Skills",
    description:
      "A dynamic personal portfolio website built with Next.js and TypeScript, designed to showcase my projects, skills, and technical growth. The site features animated components and a clean dekstop-first UI.",
    highlights:
      "Responsive layout, animated introduction with text effects, interactive project cards, dynamic project rendering, and aesthetic UI enhancements using custom components.",
    contribution:
      "Used Framer Motion for smooth transitions and Tailwind CSS for responsive design. Leveraged Next.js Static Site Generation (SSG) to pre-render pages at build time, resulting in faster load times and improved SEO. Deployed via Vercel for global access and edge caching. Integrated reusable components from Aceternity UI, Magic UI, and other libraries to enhance user interaction and visual appeal.",
    links: ["https://example.com/demo", "https://example.com/github"],
    images: [
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Framer Motion",
    ],
  },
  {
  "title": "Comparison of DBSCAN, K-Means, and Agglomerative Models for Clustering Indonesia’s Active Fire Hotspots",
  "subtitle": "Data Mining Course Project Paper",
  "description": "A scientific research paper applying DBSCAN, K-Means, and Agglomerative clustering methods on NASA FIRMS hotspot data to analyze wildfire patterns across Indonesia using the CRISP-DM framework.",
  "highlights": "Comprehensive spatial-temporal clustering of fire hotspots, evaluation using Silhouette Score and Davies-Bouldin Index, application of PCA for dimensionality reduction, temporal feature engineering, and geographic visualization of cluster results.",
  "contribution": "Implemented three clustering algorithms (DBSCAN, K-Means, Agglomerative) on preprocessed FIRMS data using Python in Google Colab. Applied PCA for dimensionality reduction, encoded temporal features, and validated clusters using Silhouette Score and DBI. Visualized spatial clusters with GeoPandas. Highlighted regional fire patterns and implications for disaster management strategies in Indonesia.",
  "links": [
    "https://colab.research.google.com/drive/129M-ayKCDmjjP9FrFu6FtDUinC-G7WJA?usp=sharing"
  ],
  "images": [],
  "technologies": [
    "Python",
    "Google Colab",
    "Pandas",
    "Scikit-Learn",
    "GeoPandas",
    "CRISP-DM",
    ]
  }

];
