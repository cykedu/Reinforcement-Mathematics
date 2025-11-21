import { FormLevel } from '../types';

export const SYLLABUS: FormLevel[] = [
  {
    id: 4,
    name: "Form 4 Mathematics",
    chapters: [
      {
        id: 1,
        title: "Quadratic Functions and Equations in One Variable",
        description: "Recognizing quadratic expressions, factorization, roots, and graphing.",
        visualization: 'quadratic',
        topics: [
          { title: "Quadratic Expressions", details: ["Recognizing expressions in the form ax² + bx + c", "Identifying coefficients a, b, and c"] },
          { title: "Factorization & Roots", details: ["Solving quadratic equations by factorization", "Understanding roots as x-intercepts"] },
          { title: "Graphs of Quadratic Functions", details: ["Effects of 'a' on the shape (smile/frown)", "Vertex and Axis of Symmetry"] }
        ]
      },
      {
        id: 2,
        title: "Number Bases",
        description: "Understanding and converting numbers between Base 2 and Base 10.",
        visualization: 'none',
        topics: [
          { title: "Concepts of Number Bases", details: ["Place values in different bases", "Digits used in Base 2 to Base 10"] },
          { title: "Conversion", details: ["Converting Base n to Base 10", "Converting Base 10 to Base n", "Addition and subtraction in different bases"] }
        ]
      },
      {
        id: 3,
        title: "Logical Reasoning",
        description: "Statements, quantifiers, implications, and logical arguments.",
        visualization: 'none',
        topics: [
          { title: "Statements", details: ["Determining truth values", "Quantifiers: 'All' and 'Some'"] },
          { title: "Operations on Statements", details: ["Negation using 'not'", "Compound statements using 'and' / 'or'"] },
          { title: "Implications", details: ["If p, then q", "Antecedent and Consequent", "Inverse, Converse, and Contrapositive"] },
          { title: "Arguments", details: ["Deductive vs Inductive reasoning", "Validity and soundness"] }
        ]
      },
      {
        id: 4,
        title: "Operations on Sets",
        description: "Intersection, union, and combined operations of sets.",
        visualization: 'sets',
        topics: [
          { title: "Intersection of Sets", details: ["Notation: A ∩ B", "Common elements identification"] },
          { title: "Union of Sets", details: ["Notation: A ∪ B", "Combining all elements"] },
          { title: "Combined Operations", details: ["Handling parentheses and multiple operations", "Complement of sets"] }
        ]
      },
      {
        id: 5,
        title: "Network in Graph Theory",
        description: "Simple graphs, directed/undirected graphs, weighted graphs, and trees.",
        visualization: 'none',
        topics: [
          { title: "Graph Basics", details: ["Vertices (V) and Edges (E)", "Sum of degrees = 2 × Number of Edges"] },
          { title: "Types of Graphs", details: ["Simple graphs", "Multiple edges and loops", "Directed vs Undirected"] },
          { title: "Trees", details: ["Subgraph properties", "Minimum spanning trees"] }
        ]
      },
      {
        id: 6,
        title: "Linear Inequalities in Two Variables",
        description: "Forming, interpreting, and solving systems of linear inequalities.",
        visualization: 'none',
        topics: [
          { title: "Forming Inequalities", details: ["Converting situations into y > mx + c, etc."] },
          { title: "Regions on Graphs", details: ["Identifying regions satisfied by inequalities", "Dashed vs Solid lines"] },
          { title: "Systems of Inequalities", details: ["Determining the common region for multiple inequalities"] }
        ]
      },
      {
        id: 7,
        title: "Graphs of Motion",
        description: "Distance-time and Speed-time graphs.",
        visualization: 'motion',
        topics: [
          { title: "Distance-Time Graphs", details: ["Gradient = Speed", "Horizontal line = Stationary"] },
          { title: "Speed-Time Graphs", details: ["Gradient = Acceleration", "Area under graph = Distance travelled"] },
          { title: "Average Speed", details: ["Total Distance / Total Time"] }
        ]
      },
      {
        id: 8,
        title: "Measures of Dispersion for Ungrouped Data",
        description: "Range, interquartile range, variance, and standard deviation.",
        visualization: 'stats',
        topics: [
          { title: "Dispersion Basics", details: ["Range = Max - Min", "Interquartile Range (IQR)"] },
          { title: "Variance & Standard Deviation", details: ["Measuring spread from the mean", "Formulas and calculation"] },
          { title: "Plots", details: ["Box plots interpretation", "Stem-and-leaf plots"] }
        ]
      },
      {
        id: 9,
        title: "Probability of Combined Events",
        description: "Intersection, Union, Mutually exclusive and independent events.",
        visualization: 'none',
        topics: [
          { title: "Combined Events", details: ["Intersection (A ∩ B)", "Union (A ∪ B)"] },
          { title: "Probability Rules", details: ["P(A ∪ B) = P(A) + P(B) - P(A ∩ B)", "Dependent vs Independent events"] }
        ]
      },
      {
        id: 10,
        title: "Consumer Mathematics: Financial Management",
        description: "Financial planning, cash flow, assets, and liabilities.",
        visualization: 'none',
        topics: [
          { title: "Financial Planning", details: ["SMART goals", "Needs vs Wants"] },
          { title: "Cash Flow", details: ["Income vs Expenses", "Positive vs Negative cash flow"] },
          { title: "Net Worth", details: ["Assets - Liabilities"] }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Form 5 Mathematics",
    chapters: [
      {
        id: 1,
        title: "Variation",
        description: "Direct, Inverse, and Combined variation.",
        visualization: 'none',
        topics: [
          { title: "Direct Variation", details: ["y ∝ x => y = kx", "Graph passes through origin"] },
          { title: "Inverse Variation", details: ["y ∝ 1/x => y = k/x", "Hyperbolic graph shape"] },
          { title: "Combined Variation", details: ["Joint variation involving multiple variables"] }
        ]
      },
      {
        id: 2,
        title: "Matrices",
        description: "Operations on matrices and solving simultaneous linear equations.",
        visualization: 'matrices',
        topics: [
          { title: "Basic Operations", details: ["Addition and Subtraction (same order only)", "Scalar multiplication", "Matrix multiplication"] },
          { title: "Identity & Inverse", details: ["Identity matrix I", "Inverse matrix A⁻¹", "Determinant (ad - bc)"] },
          { title: "Solving Equations", details: ["Using matrices to solve simultaneous linear equations"] }
        ]
      },
      {
        id: 3,
        title: "Consumer Mathematics: Insurance",
        description: "Risks, insurance coverage, premiums, and deductibles.",
        visualization: 'none',
        topics: [
          { title: "Types of Insurance", details: ["Life insurance", "General insurance (Motor, Medical, Fire)"] },
          { title: "Calculations", details: ["Premiums", "Deductibles", "Co-insurance (e.g., 80/20 basis)"] }
        ]
      },
      {
        id: 4,
        title: "Consumer Mathematics: Taxation",
        description: "Income tax, Road tax, Property tax, and more.",
        visualization: 'none',
        topics: [
          { title: "Types of Taxes", details: ["Income Tax (PCB)", "Road Tax", "Property Assessment Tax", "Quit Rent", "Sales & Service Tax (SST)"] },
          { title: "Calculations", details: ["Chargeable income", "Tax reliefs and rebates"] }
        ]
      },
      {
        id: 5,
        title: "Congruency, Enlargement, and Combined Transformations",
        description: "Geometry transformations including similarity and tessellations.",
        visualization: 'none',
        topics: [
          { title: "Congruency", details: ["Properties of congruent triangles"] },
          { title: "Enlargement", details: ["Scale factor k", "Center of enlargement", "Area relation: Area' = k² × Area"] },
          { title: "Combined Transformations", details: ["Performing transformations in sequence", "Tessellations"] }
        ]
      },
      {
        id: 6,
        title: "Ratios and Graphs of Trigonometric Functions",
        description: "Sine, Cosine, Tangent graphs and properties.",
        visualization: 'trig',
        topics: [
          { title: "Trig Functions", details: ["Sine, Cosine, Tangent", "Angles in all 4 quadrants"] },
          { title: "Graphs", details: ["y = a sin(bx + c)", "Amplitude and Period", "Properties of Sin, Cos, Tan graphs"] }
        ]
      },
      {
        id: 7,
        title: "Measures of Dispersion for Grouped Data",
        description: "Histograms, Frequency Polygons, Variance and Standard Deviation.",
        visualization: 'none',
        topics: [
          { title: "Data Representation", details: ["Histograms", "Frequency Polygons", "Ogives"] },
          { title: "Calculations", details: ["Mean of grouped data", "Variance and Standard Deviation for grouped data"] }
        ]
      },
      {
        id: 8,
        title: "Mathematical Modeling",
        description: "The process of solving real-world problems using math models.",
        visualization: 'none',
        topics: [
          { title: "Modeling Process", details: ["Identifying the problem", "Making assumptions"] },
          { title: "Solving & Refining", details: ["Applying math concepts", "Interpreting results", "Refining the model"] }
        ]
      }
    ]
  }
];