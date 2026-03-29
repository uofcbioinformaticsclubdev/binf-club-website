//  sequence analysis, gene expression, protein structure, variants

const blogs = [
  {
    id: 1,
    image: {
      src: "/img/bioinformatics-placeholder.jpg",
      alt: "Image of people discussing in a workshop"
    },
    author: "Jane Doe",
    title: "Decoding Life: How Bioinformatics is Revolutionizing Modern Biology",
    header:
      "Discover how bioinformatics combines biology, computer science, and data analysis to unlock insights from genetic information, driving breakthroughs in medicine, evolution, and biotechnology.",
    date: "November 10, 2025",
    tags: ["sequence analysis", "variants"],
    paragraphs: [
      // sequence analysis
      "Sequence analysis focuses on interpreting DNA and RNA data to uncover meaningful biological patterns. It serves as the foundation of genomics by helping researchers identify genes, regulatory elements, and functional variations within raw sequences.",
      "Modern sequencing technologies produce massive datasets that require efficient alignment, quality control, and annotation tools. These methods filter noise, correct errors, and highlight regions that may carry biological or clinical significance.",
      "Comparing sequences across species reveals evolutionary relationships and conserved elements. These comparisons help explain how traits evolve and how certain genetic features remain stable across long periods of time.",
      "Sequence analysis is widely used in clinical research to detect disease linked mutations. Identifying harmful variants supports early diagnosis, risk assessment, and personalized treatment strategies.",
      "As sequencing becomes more accessible, sequence analysis is expanding into agriculture, microbiology, and environmental research. It helps track pathogens, improve crop genetics, and explore biodiversity at a molecular level.",

      // variants
      "Genetic variants are differences in DNA sequence that occur naturally among individuals. Some variants have little effect, while others significantly influence traits, health, or disease risk.",
      "Variant analysis identifies substitutions, insertions, deletions, and structural changes within the genome. These changes can alter gene function or protein structure.",
      "Many variants are harmless, but some disrupt regulatory regions or coding sequences. These disruptive variants can affect gene expression or protein activity.",
      "Comparing variant profiles across populations helps researchers understand genetic diversity and ancestry. It also supports studies that investigate how traits spread through generations.",
      "Clinical genomics relies on variant interpretation to determine whether specific changes are pathogenic. This knowledge guides diagnosis, risk prediction, and personalized treatment strategies."
    ]
  },
  {
    id: 2,
    image: {
      src: "/img/bioinformatics-placeholder.jpg",
      alt: "Image of people discussing in a workshop"
    },
    author: "Alex Nguyen",
    title: "Machine Learning in Genomics: Transforming Data into Discovery",
    header:
      "Explore how machine learning models are being used to analyze massive genomic datasets, predict disease risks, and accelerate biological research.",
    date: "November 12, 2025",
    tags: ["gene expression", "protein structure"],
    paragraphs: [
      // gene expression
      "Gene expression analysis examines how genes are turned on or off under different conditions. It provides insight into how cells respond to stimuli, stress, and environmental changes.",
      "High throughput techniques like RNA sequencing allow researchers to measure expression levels across thousands of genes at once. This makes it possible to identify patterns that correlate with disease or biological processes.",
      "Expression profiles help distinguish cell types, developmental stages, and functional states. These profiles are used to map pathways that control metabolism, growth, and immune responses.",
      "Comparing expression between healthy and diseased samples reveals abnormal regulatory patterns. These differences often highlight candidate genes involved in disorders or cancer progression.",
      "Gene expression data supports biomarker discovery, drug target identification, and precision medicine. It drives research that aims to tailor treatments based on the molecular behavior of an individual's cells.",

      // protein structure
      "Protein structure analysis focuses on how amino acid sequences fold into functional shapes. Understanding this structure is critical because a protein's shape determines its role in cellular processes.",
      "Tools like AlphaFold and molecular modeling software can predict structures that were once difficult or slow to determine experimentally. These predictions accelerate research across structural biology.",
      "Protein structures provide insight into how molecules interact with each other. This helps scientists understand signaling pathways, enzyme activity, and molecular recognition.",
      "Studying structural changes caused by mutations explains how certain variants lead to loss of function or disease. This information is valuable for both diagnosis and therapeutic development.",
      "Protein structure data is widely used in drug design. Researchers analyze binding sites, simulate interactions, and create molecules that fit precisely into a protein target."
    ]
  },
  {
    id: 3,
    image: {
      src: "/img/bioinformatics-placeholder.jpg",
      alt: "Image of people discussing in a workshop"
    },
    author: "Sofia Patel",
    title: "The Power of Protein Structure Prediction",
    header:
      "Learn how computational tools like AlphaFold are reshaping structural biology and helping researchers understand the molecular machinery of life.",
    date: "November 15, 2025",
    tags: ["protein structure", "variants"],
    paragraphs: [
      // protein structure
      "Protein structure analysis focuses on how amino acid sequences fold into functional shapes. Understanding this structure is critical because a protein's shape determines its role in cellular processes.",
      "Tools like AlphaFold and molecular modeling software can predict structures that were once difficult or slow to determine experimentally. These predictions accelerate research across structural biology.",
      "Protein structures provide insight into how molecules interact with each other. This helps scientists understand signaling pathways, enzyme activity, and molecular recognition.",
      "Studying structural changes caused by mutations explains how certain variants lead to loss of function or disease. This information is valuable for both diagnosis and therapeutic development.",
      "Protein structure data is widely used in drug design. Researchers analyze binding sites, simulate interactions, and create molecules that fit precisely into a protein target.",

      // variants
      "Genetic variants are differences in DNA sequence that occur naturally among individuals. Some variants have little effect, while others significantly influence traits, health, or disease risk.",
      "Variant analysis identifies substitutions, insertions, deletions, and structural changes within the genome. These changes can alter gene function or protein structure.",
      "Many variants are harmless, but some disrupt regulatory regions or coding sequences. These disruptive variants can affect gene expression or protein activity.",
      "Comparing variant profiles across populations helps researchers understand genetic diversity and ancestry. It also supports studies that investigate how traits spread through generations.",
      "Clinical genomics relies on variant interpretation to determine whether specific changes are pathogenic. This knowledge guides diagnosis, risk prediction, and personalized treatment strategies."
    ]
  },
  {
    id: 4,
    image: {
      src: "/img/bioinformatics-placeholder.jpg",
      alt: "Image of people discussing in a workshop"
    },
    author: "Daniel Kim",
    title: "From Sequencing to Insights: A Beginner’s Guide to NGS Analysis",
    header:
      "A step by step walkthrough of how next generation sequencing data is processed, cleaned, and interpreted to reveal patterns in genetics and disease.",
    date: "November 18, 2025",
    tags: ["sequence analysis"],
    paragraphs: [
      "Sequence analysis focuses on interpreting DNA and RNA data to uncover meaningful biological patterns. It serves as the foundation of genomics by helping researchers identify genes, regulatory elements, and functional variations within raw sequences.",
      "Modern sequencing technologies produce massive datasets that require efficient alignment, quality control, and annotation tools. These methods filter noise, correct errors, and highlight regions that may carry biological or clinical significance.",
      "Comparing sequences across species reveals evolutionary relationships and conserved elements. These comparisons help explain how traits evolve and how certain genetic features remain stable across long periods of time.",
      "Sequence analysis is widely used in clinical research to detect disease linked mutations. Identifying harmful variants supports early diagnosis, risk assessment, and personalized treatment strategies.",
      "As sequencing becomes more accessible, sequence analysis is expanding into agriculture, microbiology, and environmental research. It helps track pathogens, improve crop genetics, and explore biodiversity at a molecular level."
    ]
  },
  {
    id: 5,
    image: {
      src: "/img/bioinformatics-placeholder.jpg",
      alt: "Image of people discussing in a workshop"
    },
    author: "Maya Thompson",
    title: "Data Visualization in Bioinformatics",
    header:
      "See how effective visualizations can reveal hidden patterns in biological datasets and help researchers draw meaningful conclusions.",
    date: "November 20, 2025",
    tags: ["protein structure"],
    paragraphs: [
      "Protein structure analysis focuses on how amino acid sequences fold into functional shapes. Understanding this structure is critical because a protein's shape determines its role in cellular processes.",
      "Tools like AlphaFold and molecular modeling software can predict structures that were once difficult or slow to determine experimentally. These predictions accelerate research across structural biology.",
      "Protein structures provide insight into how molecules interact with each other. This helps scientists understand signaling pathways, enzyme activity, and molecular recognition.",
      "Studying structural changes caused by mutations explains how certain variants lead to loss of function or disease. This information is valuable for both diagnosis and therapeutic development.",
      "Protein structure data is widely used in drug design. Researchers analyze binding sites, simulate interactions, and create molecules that fit precisely into a protein target."
    ]
  },
  {
    id: 6,
    image: {
      src: "/img/bioinformatics-placeholder.jpg",
      alt: "Image of people discussing in a workshop"
    },
    author: "Liam Rodríguez",
    title: "Metagenomics: Understanding Microbial Communities",
    header:
      "Discover how metagenomic sequencing uncovers the diversity and functions of microbial ecosystems, from the human gut to deep ocean vents.",
    date: "November 22, 2025",
    tags: ["gene expression"],
    paragraphs: [
      "Gene expression analysis examines how genes are turned on or off under different conditions. It provides insight into how cells respond to stimuli, stress, and environmental changes.",
      "High throughput techniques like RNA sequencing allow researchers to measure expression levels across thousands of genes at once. This makes it possible to identify patterns that correlate with disease or biological processes.",
      "Expression profiles help distinguish cell types, developmental stages, and functional states. These profiles are used to map pathways that control metabolism, growth, and immune responses.",
      "Comparing expression between healthy and diseased samples reveals abnormal regulatory patterns. These differences often highlight candidate genes involved in disorders or cancer progression.",
      "Gene expression data supports biomarker discovery, drug target identification, and precision medicine. It drives research that aims to tailor treatments based on the molecular behavior of an individual's cells."
    ]
  }
];

export default blogs;
