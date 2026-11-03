/**
 * Exam scope: what JEE Main and NEET UG actually examine.
 *
 * Sources: the official "Syllabus for JEE (Main) - 2027" (Paper 1, B.E./B.Tech.)
 * and "SYLLABUS FOR NEET (UG) - 2025", which is NEET's latest. Unit order and
 * names follow those documents. B.Arch and B.Planning are deliberately left out.
 *
 * `in` is the syllabus condensed for reading in a drop-down. `out` is taught in
 * the book but named in neither syllabus. A unit's `book` says where to read it.
 *
 * Static on purpose: this changes when a syllabus changes, not often enough to
 * justify an endpoint. The full official wording is in exam-scope-syllabus.ts.
 */

export type ScopeExam = 'jee' | 'neet';
export type SubjectKey = 'physics' | 'chemistry' | 'maths' | 'biology';

export interface ScopeUnitSource {
  n: number;
  t: string;
  book: string;
  in: string[];
  /** Named only in the NEET syllabus. */
  inNeet?: string[];
  out?: string[];
  note?: string;
  /** Shown to JEE students only. */
  noteJee?: string;
}

export interface ScopeUnit {
  n: number;
  t: string;
  book: string;
  lines: string[];
  out: string[];
  note: string;
}

export interface ScopeSubject {
  key: SubjectKey;
  name: string;
  units: ScopeUnitSource[];
  /** Our grouping for reading, not the syllabus's own. */
  themes: { name: string; units: number[] }[];
  /** Chapters of older or current books that are in neither syllabus. */
  gone: string[];
}

export interface BookChapter {
  name: string;
  /** The syllabus unit it belongs to. 0: printed in the book, not in the syllabus. */
  unit: number;
  except?: string[];
}

export const SCOPE_EXAMS: Record<
  ScopeExam,
  {
    key: ScopeExam;
    label: string;
    year: string;
    subjects: SubjectKey[];
    total: number;
    source: string;
  }
> = {
  jee: {
    key: 'jee',
    label: 'JEE Main',
    year: '2027',
    subjects: ['physics', 'chemistry', 'maths'],
    total: 54,
    source: 'Official JEE (Main) 2027 syllabus, Paper 1 (B.E./B.Tech.)',
  },
  neet: {
    key: 'neet',
    label: 'NEET UG',
    year: '2025',
    subjects: ['physics', 'chemistry', 'biology'],
    total: 50,
    source: 'Official NEET (UG) 2025 syllabus, the latest published',
  },
};

export const SCOPE_SUBJECTS: Record<SubjectKey, ScopeSubject> = {
  physics: {
    key: 'physics',
    name: 'Physics',
    units: [
      {
        n: 1,
        t: 'Units and measurements',
        book: 'Class 11 · Ch 1',
        in: [
          'SI units, fundamental and derived units',
          'Least count, significant figures, errors',
          'Dimensions and dimensional analysis',
        ],
      },
      {
        n: 2,
        t: 'Kinematics',
        book: 'Class 11 · Ch 2, 3',
        in: [
          'Motion in a straight line, speed and velocity',
          'Uniform acceleration, position-time and velocity-time graphs',
          'Relative velocity',
          'Motion in a plane, projectile motion, uniform circular motion',
        ],
        inNeet: [
          'Scalars and vectors: addition, subtraction, scalar and vector products, resolution',
        ],
        noteJee: 'Vectors are listed under Maths, Unit 12.',
      },
      {
        n: 3,
        t: 'Laws of motion',
        book: 'Class 11 · Ch 4',
        in: [
          "Newton's three laws, momentum, impulse",
          'Conservation of linear momentum',
          'Static, kinetic and rolling friction',
          'Centripetal force, level and banked roads',
        ],
      },
      {
        n: 4,
        t: 'Work, energy and power',
        book: 'Class 11 · Ch 5',
        in: [
          'Work by constant and variable forces',
          'Kinetic and potential energy, work-energy theorem, power',
          'Spring energy, conservation of mechanical energy',
          'Motion in a vertical circle',
          'Elastic and inelastic collisions in 1D and 2D',
        ],
      },
      {
        n: 5,
        t: 'Rotational motion',
        book: 'Class 11 · Ch 6',
        in: [
          'Centre of mass',
          'Torque, angular momentum and its conservation',
          'Moment of inertia, radius of gyration',
          'Parallel and perpendicular axes theorems',
          'Equilibrium of rigid bodies, equations of rotational motion',
        ],
      },
      {
        n: 6,
        t: 'Gravitation',
        book: 'Class 11 · Ch 7',
        in: [
          'Universal law of gravitation',
          'g with altitude and depth',
          "Kepler's laws",
          'Gravitational potential and potential energy',
          'Escape velocity, orbital velocity, satellites',
        ],
      },
      {
        n: 7,
        t: 'Properties of solids and liquids',
        book: 'Class 11 · Ch 8, 9, 10',
        in: [
          "Stress, strain, Hooke's law, the three moduli",
          "Fluid pressure, Pascal's law",
          "Viscosity, Stokes' law, terminal velocity",
          "Bernoulli's principle",
          'Surface tension, drops, bubbles, capillary rise',
          'Heat, thermal expansion, calorimetry, latent heat',
          'Conduction, convection, radiation',
        ],
      },
      {
        n: 8,
        t: 'Thermodynamics',
        book: 'Class 11 · Ch 11',
        in: [
          'Zeroth law and temperature',
          'Heat, work and internal energy',
          'First law, isothermal and adiabatic processes',
          'Second law, reversible and irreversible processes',
        ],
        out: ['Carnot engine'],
      },
      {
        n: 9,
        t: 'Kinetic theory of gases',
        book: 'Class 11 · Ch 12',
        in: [
          'Perfect gas equation, work on compressing a gas',
          'Assumptions, the concept of pressure',
          'RMS speed, kinetic meaning of temperature',
          'Degrees of freedom, equipartition, specific heats',
          "Mean free path, Avogadro's number",
        ],
      },
      {
        n: 10,
        t: 'Oscillations and waves',
        book: 'Class 11 · Ch 13, 14',
        in: [
          'Periodic motion and SHM, its energy',
          'Spring and simple pendulum',
          'Longitudinal and transverse waves',
          'Superposition and reflection',
          'Standing waves in strings and organ pipes',
          'Beats',
        ],
        out: ['Doppler effect'],
      },
      {
        n: 11,
        t: 'Electrostatics',
        book: 'Class 12 · Ch 1, 2',
        in: [
          "Coulomb's law, superposition",
          'Electric field, dipole',
          "Flux and Gauss's law: wire, sheet, shell",
          'Potential, equipotentials, potential energy',
          'Capacitors, dielectrics, energy stored',
        ],
      },
      {
        n: 12,
        t: 'Current electricity',
        book: 'Class 12 · Ch 3',
        in: [
          "Drift velocity, mobility, Ohm's law",
          'Resistivity and its temperature dependence',
          'Series and parallel resistors',
          'Internal resistance, emf, combining cells',
          "Kirchhoff's laws, Wheatstone bridge, metre bridge",
        ],
        out: ['Potentiometer'],
      },
      {
        n: 13,
        t: 'Magnetic effects of current and magnetism',
        book: 'Class 12 · Ch 4, 5',
        in: [
          "Biot-Savart law, Ampere's law",
          'Force on moving charges and conductors',
          'Force between parallel currents',
          'Moving coil galvanometer, ammeter, voltmeter',
          'Magnetic dipole, bar magnet',
          'Para-, dia- and ferromagnetism',
        ],
        out: ['Cyclotron'],
      },
      {
        n: 14,
        t: 'Electromagnetic induction and alternating currents',
        book: 'Class 12 · Ch 6, 7',
        in: [
          "Faraday's and Lenz's laws, eddy currents",
          'Self and mutual inductance',
          'Peak and RMS values, reactance, impedance',
          'LCR circuit, resonance, power, wattless current',
          'AC generator and transformer',
        ],
      },
      {
        n: 15,
        t: 'Electromagnetic waves',
        book: 'Class 12 · Ch 8',
        in: [
          'Displacement current',
          'Characteristics, transverse nature',
          'The spectrum, radio waves to gamma rays',
          'Applications',
        ],
      },
      {
        n: 16,
        t: 'Optics',
        book: 'Class 12 · Ch 9, 10',
        in: [
          'Mirrors, refraction, thin lenses, total internal reflection',
          'Lens maker formula, power, lenses in contact',
          'Prism',
          'Microscope and telescope',
          "Huygens' principle",
          "Young's double slit",
          'Single-slit diffraction',
          "Polarisation, Brewster's law",
        ],
      },
      {
        n: 17,
        t: 'Dual nature of matter and radiation',
        book: 'Class 12 · Ch 11',
        in: ["Photoelectric effect, Einstein's equation", 'Matter waves, de Broglie relation'],
      },
      {
        n: 18,
        t: 'Atoms and nuclei',
        book: 'Class 12 · Ch 12, 13',
        in: [
          'Rutherford and Bohr models, hydrogen spectrum',
          'Size and composition of the nucleus',
          'Mass defect, binding energy',
          'Fission and fusion',
        ],
        out: ['Radioactive decay laws'],
      },
      {
        n: 19,
        t: 'Electronic devices',
        book: 'Class 12 · Ch 14',
        in: [
          'Semiconductors, diode I-V curves',
          'Diode as a rectifier',
          'LED, photodiode, solar cell, Zener diode',
          'Logic gates: OR, AND, NOT, NAND, NOR',
        ],
      },
      {
        n: 20,
        t: 'Experimental skills',
        book: 'Lab work · 18 experiments, not a chapter',
        in: [
          'Vernier calipers, screw gauge',
          'Simple pendulum, metre scale',
          "Young's modulus, surface tension, viscosity",
          'Speed of sound, resonance tube',
          'Specific heat by method of mixtures',
          "Metre bridge, Ohm's law, galvanometer",
          'Focal lengths, prism, glass slab',
          'Diode and Zener curves, identifying components',
        ],
      },
    ],
    themes: [
      { name: 'Mechanics', units: [1, 2, 3, 4, 5, 6] },
      { name: 'Heat and matter', units: [7, 8, 9] },
      { name: 'Oscillations and waves', units: [10] },
      { name: 'Electricity and magnetism', units: [11, 12, 13, 14, 15] },
      { name: 'Optics', units: [16] },
      { name: 'Modern physics', units: [17, 18, 19] },
      { name: 'Lab', units: [20] },
    ],
    gone: ['Communication Systems'],
  },
  chemistry: {
    key: 'chemistry',
    name: 'Chemistry',
    units: [
      {
        n: 1,
        t: 'Some basic concepts in chemistry',
        book: 'Class 11 · Ch 1',
        in: [
          'Atoms, molecules, laws of combination',
          'Mole concept, molar mass',
          'Empirical and molecular formulae',
          'Stoichiometry',
        ],
      },
      {
        n: 2,
        t: 'Atomic structure',
        book: 'Class 11 · Ch 2',
        in: [
          'Hydrogen spectrum, Bohr model',
          'Dual nature, de Broglie, Heisenberg',
          'Quantum numbers, shapes of s, p and d orbitals',
          "Aufbau, Pauli and Hund's rules",
        ],
        out: ['Early atomic models and discovery'],
      },
      {
        n: 3,
        t: 'Chemical bonding and molecular structure',
        book: 'Class 11 · Ch 4',
        in: [
          'Ionic bonds, lattice enthalpy',
          "Electronegativity, Fajan's rule, dipole moment",
          'VSEPR, shapes of molecules',
          'Valence bond theory, hybridisation, resonance',
          'Molecular orbital theory, bond order',
          'Metallic and hydrogen bonding',
        ],
      },
      {
        n: 4,
        t: 'Chemical thermodynamics',
        book: 'Class 11 · Ch 5',
        in: [
          'System, surroundings, state functions',
          "First law, enthalpy, Hess's law",
          'Second law, spontaneity, change in entropy and Gibbs energy',
          'Gibbs energy and equilibrium constant',
        ],
      },
      {
        n: 5,
        t: 'Solutions',
        book: 'Class 12 · Ch 1',
        in: [
          'Concentration: molality, molarity, mole fraction',
          "Vapour pressure, Raoult's law",
          'Colligative properties',
          "Molar mass, van't Hoff factor",
        ],
      },
      {
        n: 6,
        t: 'Equilibrium',
        book: 'Class 11 · Ch 6',
        in: [
          "Physical equilibria, Henry's law",
          "Kp and Kc, Le Chatelier's principle",
          'Acids and bases, pH',
          'Common ion effect, hydrolysis, buffers',
          'Solubility product',
        ],
      },
      {
        n: 7,
        t: 'Redox reactions and electrochemistry',
        book: 'Class 11 · Ch 7, Class 12 · Ch 2',
        in: [
          'Oxidation number, balancing redox',
          "Conductance, Kohlrausch's law",
          'Galvanic cells, electrode potential, Nernst equation',
          'Dry cell, lead accumulator, fuel cells',
        ],
      },
      {
        n: 8,
        t: 'Chemical kinetics',
        book: 'Class 12 · Ch 3',
        in: [
          'Rate law, order, molecularity',
          'Zero and first order, half-life',
          'Arrhenius theory, activation energy',
          'Collision theory, no derivation',
        ],
      },
      {
        n: 9,
        t: 'Classification and periodicity',
        book: 'Class 11 · Ch 3',
        in: [
          'Modern periodic table, s, p, d and f blocks',
          'Periodic trends: radii, ionization enthalpy, electron gain enthalpy, valence',
        ],
      },
      {
        n: 10,
        t: 'p-Block elements',
        book: 'Textbooks · Class 11, Ch 10',
        in: [
          'Groups 13 to 18',
          'Electronic configuration and general trends',
          'Unique behaviour of the first element in each group',
        ],
        note: 'Only the general trends are listed.',
      },
      {
        n: 11,
        t: 'd- and f-Block elements',
        book: 'Class 12 · Ch 4',
        in: [
          'First-row transition elements and their trends',
          'K2Cr2O7 and KMnO4',
          'Lanthanoids, lanthanoid contraction',
          'Actinoids: configuration and oxidation states',
        ],
      },
      {
        n: 12,
        t: 'Coordination compounds',
        book: 'Class 12 · Ch 5',
        in: [
          "Werner's theory, ligands, denticity",
          'IUPAC names, isomerism',
          'Valence bond approach, crystal field theory',
          'Colour, magnetism and importance',
        ],
      },
      {
        n: 13,
        t: 'Purification and characterisation',
        book: 'Class 11 · Ch 8',
        in: [
          'Crystallisation, distillation, chromatography',
          'Detecting nitrogen, sulphur, phosphorus, halogens',
          'Estimating elements, basic principles only',
          'Empirical and molecular formula problems',
        ],
      },
      {
        n: 14,
        t: 'Basic principles of organic chemistry',
        book: 'Class 11 · Ch 8',
        in: [
          'Hybridisation, functional groups, isomerism',
          'Trivial and IUPAC names',
          'Bond fission, carbocations, free radicals',
          'Inductive effect, resonance, hyperconjugation',
          'Substitution, addition, elimination, rearrangement',
        ],
      },
      {
        n: 15,
        t: 'Hydrocarbons',
        book: 'Class 11 · Ch 9',
        in: [
          'Alkanes: conformations of ethane, halogenation',
          'Alkenes: electrophilic addition, peroxide effect, ozonolysis',
          'Alkynes: acidic character',
          'Benzene, aromaticity, Friedel-Crafts',
        ],
      },
      {
        n: 16,
        t: 'Compounds containing halogens',
        book: 'Class 12 · Ch 6',
        in: [
          'Preparation, properties, reactions',
          'C-X bond, substitution mechanisms',
          'Environmental effects of chloroform, iodoform, freons, DDT',
        ],
      },
      {
        n: 17,
        t: 'Compounds containing oxygen',
        book: 'Class 12 · Ch 7, 8',
        in: [
          'Alcohols: identification, dehydration',
          'Phenols: acidity, Reimer-Tiemann',
          'Ethers: structure only',
          'Aldehydes and ketones: aldol, Cannizzaro, haloform',
          'Carboxylic acids: acidic strength only',
        ],
      },
      {
        n: 18,
        t: 'Compounds containing nitrogen',
        book: 'Class 12 · Ch 9',
        in: [
          'Amines: structure, basic character, identification',
          'Diazonium salts: use in synthesis',
        ],
      },
      {
        n: 19,
        t: 'Biomolecules',
        book: 'Class 12 · Ch 10',
        in: [
          'Carbohydrates',
          'Proteins, enzymes',
          'Vitamins',
          'DNA and RNA',
          'Hormones: general introduction',
        ],
      },
      {
        n: 20,
        t: 'Practical chemistry',
        book: 'Lab work, not a chapter',
        in: [
          'Detecting functional groups',
          "Preparing Mohr's salt, potash alum, acetanilide, iodoform",
          'Titrations with KMnO4',
          'Salt analysis: cations and anions',
          'Enthalpy, lyophilic and lyophobic sols, rate experiments',
        ],
      },
    ],
    themes: [
      { name: 'Physical', units: [1, 2, 3, 4, 5, 6, 7, 8] },
      { name: 'Inorganic', units: [9, 10, 11, 12] },
      { name: 'Organic', units: [13, 14, 15, 16, 17, 18, 19] },
      { name: 'Lab', units: [20] },
    ],
    gone: [
      'States of Matter',
      'The s-Block Elements',
      'Hydrogen',
      'Environmental Chemistry',
      'The Solid State',
      'Surface Chemistry',
      'Metallurgy',
      'Polymers',
    ],
  },
  maths: {
    key: 'maths',
    name: 'Maths',
    units: [
      {
        n: 1,
        t: 'Sets, relations and functions',
        book: 'Class 11 · Ch 1, 2, Class 12 · Ch 1',
        in: [
          'Sets, union, intersection, power set',
          'Types of relations, equivalence relations',
          'One-one, onto, composition of functions',
        ],
      },
      {
        n: 2,
        t: 'Complex numbers and quadratic equations',
        book: 'Class 11 · Ch 4',
        in: [
          'a + ib, Argand diagram, modulus and argument',
          'Roots and coefficients, nature of roots',
        ],
      },
      {
        n: 3,
        t: 'Matrices and determinants',
        book: 'Class 12 · Ch 3, 4',
        in: [
          'Algebra and types of matrices',
          'Determinants of order two and three, area of triangles',
          'Adjoint and inverse',
          'Solving linear equations in two or three variables',
        ],
      },
      {
        n: 4,
        t: 'Permutations and combinations',
        book: 'Class 11 · Ch 6',
        in: ['Fundamental principle of counting', 'P(n, r), C(n, r), simple applications'],
      },
      {
        n: 5,
        t: 'Binomial theorem',
        book: 'Class 11 · Ch 7',
        in: ['Positive integral index', 'General term and middle term'],
      },
      {
        n: 6,
        t: 'Sequence and series',
        book: 'Class 11 · Ch 8',
        in: [
          'Arithmetic and geometric progressions',
          'Arithmetic and geometric means, their relation',
        ],
      },
      {
        n: 7,
        t: 'Limit, continuity and differentiability',
        book: 'Class 11 · Ch 12, Class 12 · Ch 5, 6',
        in: [
          'Functions and their graphs',
          'Limits, continuity, differentiability',
          'Rules of differentiation, derivatives up to order two',
          'Rate of change, increasing and decreasing functions',
          'Maxima and minima of one variable',
        ],
      },
      {
        n: 8,
        t: 'Integral calculus',
        book: 'Class 12 · Ch 7, 8',
        in: [
          'Substitution, by parts, partial fractions',
          'Definite integrals and their properties',
          'Fundamental theorem of calculus',
          'Area bounded by simple curves',
        ],
      },
      {
        n: 9,
        t: 'Differential equations',
        book: 'Class 12 · Ch 9',
        in: ['Order and degree', 'Separation of variables', 'Homogeneous and linear equations'],
      },
      {
        n: 10,
        t: 'Coordinate geometry',
        book: 'Class 11 · Ch 9, 10',
        in: [
          'Distance and section formula, locus, slope',
          'Straight lines, centroid, orthocentre, circumcentre',
          'Circles',
          'Parabola, ellipse and hyperbola in standard form',
        ],
      },
      {
        n: 11,
        t: 'Three dimensional geometry',
        book: 'Class 11 · Ch 11, Class 12 · Ch 11',
        in: [
          'Distance, section formula',
          'Direction ratios and cosines, angle between lines',
          'Equation of a line, skew lines, shortest distance',
        ],
        out: ['Equation of a plane'],
      },
      {
        n: 12,
        t: 'Vector algebra',
        book: 'Class 12 · Ch 10',
        in: ['Addition, components in 2D and 3D', 'Scalar and vector products'],
      },
      {
        n: 13,
        t: 'Statistics and probability',
        book: 'Class 11 · Ch 13, 14, Class 12 · Ch 13',
        in: [
          'Mean, median, mode, standard deviation, variance',
          'Addition and multiplication theorems',
          "Bayes' theorem",
          'Probability distribution of a random variable',
        ],
      },
      {
        n: 14,
        t: 'Trigonometry',
        book: 'Class 11 · Ch 3, Class 12 · Ch 2',
        in: ['Identities and trigonometric functions', 'Inverse trigonometric functions'],
      },
    ],
    themes: [
      { name: 'Algebra', units: [1, 2, 3, 4, 5, 6] },
      { name: 'Calculus', units: [7, 8, 9] },
      { name: 'Geometry', units: [10, 11, 12] },
      { name: 'Statistics and probability', units: [13] },
      { name: 'Trigonometry', units: [14] },
    ],
    gone: [
      'Linear Inequalities',
      'Linear Programming',
      'Mathematical Reasoning',
      'Mathematical Induction',
    ],
  },
  biology: {
    key: 'biology',
    name: 'Biology',
    units: [
      {
        n: 1,
        t: 'Diversity in living world',
        book: 'Class 11 · Ch 1 to 4',
        in: [
          'What is living, taxonomy, binomial nomenclature',
          'Five kingdoms: Monera, Protista, Fungi',
          'Lichens, viruses and viroids',
          'Plant groups, algae to gymnosperms',
          'Animals: non-chordates to phyla, chordates to classes',
        ],
        out: ['Taxonomic aids'],
      },
      {
        n: 2,
        t: 'Structural organisation in animals and plants',
        book: 'Class 11 · Ch 5, 6, 7',
        in: [
          'Morphology and anatomy of flowering plants',
          'Tissues',
          'Five plant families',
          'Animal tissues',
          'Frog: body systems, in brief',
        ],
        out: ['Secondary growth'],
      },
      {
        n: 3,
        t: 'Cell structure and function',
        book: 'Class 11 · Ch 8, 9, 10',
        in: [
          'Prokaryotic and eukaryotic cells, organelles',
          'Biomolecules and enzymes',
          'Cell cycle, mitosis, meiosis',
        ],
      },
      {
        n: 4,
        t: 'Plant physiology',
        book: 'Class 11 · Ch 11, 12, 13',
        in: [
          'Photosynthesis, C3 and C4 pathways',
          'Respiration: glycolysis, TCA cycle, ATP count',
          'Seed germination, growth phases',
          'Auxin, gibberellin, cytokinin, ethylene, ABA',
        ],
        out: ['Vernalisation', 'Seed dormancy'],
      },
      {
        n: 5,
        t: 'Human physiology',
        book: 'Class 11 · Ch 14 to 19',
        in: [
          'Breathing and respiration',
          'Body fluids and circulation, ECG',
          'Excretion and kidney function',
          'Locomotion, muscles, joints',
          'Neural control, nerve impulse',
          'Endocrine system and hormones',
        ],
        out: ['Sense organs'],
        note: 'Diseases and disorders only in brief.',
      },
      {
        n: 6,
        t: 'Reproduction',
        book: 'Class 12 · Ch 1, 2, 3',
        in: [
          'Flowering plants: pollination, double fertilisation',
          'Apomixis, parthenocarpy, polyembryony',
          'Human reproduction, gametogenesis, menstrual cycle',
          'Reproductive health, contraception, IVF, ZIFT, GIFT',
        ],
      },
      {
        n: 7,
        t: 'Genetics and evolution',
        book: 'Class 12 · Ch 4, 5, 6',
        in: [
          'Mendelian inheritance and deviations',
          'Sex determination, linkage, genetic disorders',
          'DNA, replication, transcription, translation',
          'Lac operon, human genome project, DNA fingerprinting',
          'Evolution, Hardy-Weinberg, human evolution',
        ],
      },
      {
        n: 8,
        t: 'Biology and human welfare',
        book: 'Class 12 · Ch 7, 8',
        in: [
          'Pathogens and diseases, immunology, vaccines',
          'Cancer, HIV and AIDS',
          'Drug, alcohol and tobacco abuse',
          'Microbes in food, industry, sewage, energy, farming',
        ],
      },
      {
        n: 9,
        t: 'Biotechnology and its applications',
        book: 'Class 12 · Ch 9, 10',
        in: [
          'Recombinant DNA technology',
          'Human insulin, vaccines, gene therapy',
          'Bt crops, transgenic animals',
          'Biosafety, biopiracy, patents',
        ],
      },
      {
        n: 10,
        t: 'Ecology and environment',
        book: 'Class 12 · Ch 11, 12, 13',
        in: [
          'Population interactions and attributes',
          'Ecosystems: productivity, decomposition, energy flow',
          'Pyramids of number, biomass, energy',
          'Biodiversity, hotspots, Red Data Book, conservation',
        ],
        out: ['Ecological succession'],
      },
    ],
    themes: [
      { name: 'Living things and cells', units: [1, 2, 3] },
      { name: 'How plants and humans work', units: [4, 5] },
      { name: 'Reproduction and genetics', units: [6, 7] },
      { name: 'Health, biotech and ecology', units: [8, 9, 10] },
    ],
    gone: [
      'Transport in Plants',
      'Mineral Nutrition',
      'Digestion and Absorption',
      'Reproduction in Organisms',
      'Food Production Strategies',
      'Environmental Issues',
    ],
  },
};

export const SCOPE_BOOKS: Record<SubjectKey, Record<11 | 12, BookChapter[]>> = {
  physics: {
    '11': [
      { name: 'Units and Measurements', unit: 1 },
      { name: 'Motion in a Straight Line', unit: 2 },
      { name: 'Motion in a Plane', unit: 2 },
      { name: 'Laws of Motion', unit: 3 },
      { name: 'Work, Energy and Power', unit: 4 },
      { name: 'System of Particles and Rotational Motion', unit: 5 },
      { name: 'Gravitation', unit: 6 },
      { name: 'Mechanical Properties of Solids', unit: 7 },
      { name: 'Mechanical Properties of Fluids', unit: 7 },
      { name: 'Thermal Properties of Matter', unit: 7 },
      { name: 'Thermodynamics', unit: 8, except: ['Carnot engine'] },
      { name: 'Kinetic Theory', unit: 9 },
      { name: 'Oscillations', unit: 10 },
      { name: 'Waves', unit: 10, except: ['Doppler effect'] },
    ],
    '12': [
      { name: 'Electric Charges and Fields', unit: 11 },
      { name: 'Electrostatic Potential and Capacitance', unit: 11 },
      { name: 'Current Electricity', unit: 12, except: ['Potentiometer'] },
      { name: 'Moving Charges and Magnetism', unit: 13, except: ['Cyclotron'] },
      { name: 'Magnetism and Matter', unit: 13 },
      { name: 'Electromagnetic Induction', unit: 14 },
      { name: 'Alternating Current', unit: 14 },
      { name: 'Electromagnetic Waves', unit: 15 },
      { name: 'Ray Optics and Optical Instruments', unit: 16 },
      { name: 'Wave Optics', unit: 16 },
      { name: 'Dual Nature of Radiation and Matter', unit: 17 },
      { name: 'Atoms', unit: 18 },
      { name: 'Nuclei', unit: 18, except: ['Radioactive decay laws'] },
      { name: 'Semiconductor Electronics', unit: 19 },
    ],
  },
  chemistry: {
    '11': [
      { name: 'Some Basic Concepts of Chemistry', unit: 1 },
      {
        name: 'Structure of Atom',
        unit: 2,
        except: ['Early atomic models and discovery'],
      },
      { name: 'Classification of Elements and Periodicity', unit: 9 },
      { name: 'Chemical Bonding and Molecular Structure', unit: 3 },
      { name: 'Thermodynamics', unit: 4 },
      { name: 'Equilibrium', unit: 6 },
      { name: 'Redox Reactions', unit: 7 },
      { name: 'Organic Chemistry: Basic Principles', unit: 14 },
      { name: 'Hydrocarbons', unit: 15 },
      { name: 'The p-Block Elements', unit: 10 },
    ],
    '12': [
      { name: 'Solutions', unit: 5 },
      { name: 'Electrochemistry', unit: 7 },
      { name: 'Chemical Kinetics', unit: 8 },
      { name: 'The d- and f-Block Elements', unit: 11 },
      { name: 'Coordination Compounds', unit: 12 },
      { name: 'Haloalkanes and Haloarenes', unit: 16 },
      { name: 'Alcohols, Phenols and Ethers', unit: 17 },
      { name: 'Aldehydes, Ketones and Carboxylic Acids', unit: 17 },
      { name: 'Amines', unit: 18 },
      { name: 'Biomolecules', unit: 19 },
    ],
  },
  maths: {
    '11': [
      { name: 'Sets', unit: 1 },
      { name: 'Relations and Functions', unit: 1 },
      { name: 'Trigonometric Functions', unit: 14 },
      { name: 'Complex Numbers and Quadratic Equations', unit: 2 },
      { name: 'Linear Inequalities', unit: 0 },
      { name: 'Permutations and Combinations', unit: 4 },
      { name: 'Binomial Theorem', unit: 5 },
      { name: 'Sequences and Series', unit: 6 },
      { name: 'Straight Lines', unit: 10 },
      { name: 'Conic Sections', unit: 10 },
      { name: 'Introduction to 3D Geometry', unit: 11 },
      { name: 'Limits and Derivatives', unit: 7 },
      { name: 'Statistics', unit: 13 },
      { name: 'Probability', unit: 13 },
    ],
    '12': [
      { name: 'Relations and Functions', unit: 1 },
      { name: 'Inverse Trigonometric Functions', unit: 14 },
      { name: 'Matrices', unit: 3 },
      { name: 'Determinants', unit: 3 },
      { name: 'Continuity and Differentiability', unit: 7 },
      { name: 'Application of Derivatives', unit: 7 },
      { name: 'Integrals', unit: 8 },
      { name: 'Application of Integrals', unit: 8 },
      { name: 'Differential Equations', unit: 9 },
      { name: 'Vector Algebra', unit: 12 },
      {
        name: 'Three Dimensional Geometry',
        unit: 11,
        except: ['Equation of a plane'],
      },
      { name: 'Linear Programming', unit: 0 },
      { name: 'Probability', unit: 13 },
    ],
  },
  biology: {
    '11': [
      { name: 'The Living World', unit: 1, except: ['Taxonomic aids'] },
      { name: 'Biological Classification', unit: 1 },
      { name: 'Plant Kingdom', unit: 1 },
      { name: 'Animal Kingdom', unit: 1 },
      { name: 'Morphology of Flowering Plants', unit: 2 },
      {
        name: 'Anatomy of Flowering Plants',
        unit: 2,
        except: ['Secondary growth'],
      },
      { name: 'Structural Organisation in Animals', unit: 2 },
      { name: 'Cell: The Unit of Life', unit: 3 },
      { name: 'Biomolecules', unit: 3 },
      { name: 'Cell Cycle and Cell Division', unit: 3 },
      { name: 'Photosynthesis in Higher Plants', unit: 4 },
      { name: 'Respiration in Plants', unit: 4 },
      {
        name: 'Plant Growth and Development',
        unit: 4,
        except: ['Vernalisation', 'Seed dormancy'],
      },
      { name: 'Breathing and Exchange of Gases', unit: 5 },
      { name: 'Body Fluids and Circulation', unit: 5 },
      { name: 'Excretory Products and their Elimination', unit: 5 },
      { name: 'Locomotion and Movement', unit: 5 },
      {
        name: 'Neural Control and Coordination',
        unit: 5,
        except: ['Sense organs'],
      },
      { name: 'Chemical Coordination and Integration', unit: 5 },
    ],
    '12': [
      { name: 'Sexual Reproduction in Flowering Plants', unit: 6 },
      { name: 'Human Reproduction', unit: 6 },
      { name: 'Reproductive Health', unit: 6 },
      { name: 'Principles of Inheritance and Variation', unit: 7 },
      { name: 'Molecular Basis of Inheritance', unit: 7 },
      { name: 'Evolution', unit: 7 },
      { name: 'Human Health and Disease', unit: 8 },
      { name: 'Microbes in Human Welfare', unit: 8 },
      { name: 'Biotechnology: Principles and Processes', unit: 9 },
      { name: 'Biotechnology and its Applications', unit: 9 },
      { name: 'Organisms and Populations', unit: 10 },
      { name: 'Ecosystem', unit: 10, except: ['Ecological succession'] },
      { name: 'Biodiversity and Conservation', unit: 10 },
    ],
  },
};

export function scopeUnit(exam: ScopeExam, subject: SubjectKey, n: number): ScopeUnit | null {
  const unit = SCOPE_SUBJECTS[subject].units.find((u) => u.n === n);
  if (!unit) return null;
  return {
    n: unit.n,
    t: unit.t,
    book: unit.book,
    lines: exam === 'neet' && unit.inNeet ? [...unit.in, ...unit.inNeet] : unit.in,
    out: unit.out ?? [],
    note: unit.note ?? (exam === 'jee' && unit.noteJee ? unit.noteJee : ''),
  };
}

export function scopeUnits(exam: ScopeExam, subject: SubjectKey): ScopeUnit[] {
  return SCOPE_SUBJECTS[subject].units.map((u) => scopeUnit(exam, subject, u.n) as ScopeUnit);
}
