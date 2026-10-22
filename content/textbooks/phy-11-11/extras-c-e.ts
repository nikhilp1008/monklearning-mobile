import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Additional Topics C to E, word for word from the Class 11
 * Physics Master Reference, pages 809 to 818: C Irreversible Adiabatics: Free
 * Expansion & Expansion Against Constant Pext (pp. 809 to 812), D Entropy
 * Accounting for Irreversible Processes: The Universe Ledger (pp. 812 to 815)
 * and E Compound Carnot Systems: Engines Driving Refrigerators & Cascades
 * (pp. 815 to 818). Each addendum prints its own practice problems and
 * answers, which are its Practice part. The addenda print no drawings.
 */
export const TOPICS: Topic[] = [
  {
    n: 'C',
    title: 'Irreversible Adiabatics: Free Expansion & Expansion Against Constant Pext',
    extra: true,
    kalam: 'You must use the first law with the actual work to find the final state.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 derives reversible adiabatic relations (<i>PV</i><sup><i>γ</i></sup> = const) assuming quasi-static equilibrium. JEE Advanced heavily tests <b>irreversible adiabatics</b>: (1) Free expansion into vacuum (Joule expansion) — <i>W</i> = 0, <i>Q</i> = 0, Δ<i>U</i> = 0, Δ<i>T</i> = 0 (ideal gas), but Δ<i>S</i> > 0. (2) Expansion against a constant external pressure <i>P</i><sub>ext</sub> (finite pressure difference) — not quasi-static, <i>W</i> = <i>P</i><sub>ext</sub>Δ<i>V</i>, <i>Q</i> = 0, so Δ<i>U</i> = −<i>W</i>. The final state does <b>not</b> lie on <i>PV</i><sup><i>γ</i></sup> = const. You must use the first law with the actual work to find the final state.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Case 1: Free Expansion (Joule Expansion)</b><br>• Adiabatic ⇒ <i>Q</i> = 0.<br>• Vacuum ⇒ <i>P</i><sub>ext</sub> = 0 ⇒ <i>W</i> = 0.<br>• First Law: Δ<i>U</i> = 0.<br>• Ideal Gas: <i>U</i>(<i>T</i>) only ⇒ Δ<i>T</i> = 0 (Isothermal result, but <b>not</b> an isothermal process — no reservoir, not quasi-static).<br>• Entropy change: Compute via reversible isotherm connecting same (<i>V</i><sub><i>i</i></sub>, <i>T</i>) to (<i>V</i><sub><i>f</i></sub>, <i>T</i>).<br>Δ<i>S</i><sub>gas</sub> = <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) > 0.<br>Δ<i>S</i><sub>surr</sub> = 0 (no heat exchange). Δ<i>S</i><sub>univ</sub> = Δ<i>S</i><sub>gas</sub> > 0.',
      },
      {
        t: 'p',
        html: '<b>Case 2: Irreversible Adiabatic Expansion Against Constant <i>P</i><sub>ext</sub></b><br>• Adiabatic ⇒ <i>Q</i> = 0.<br>• Work: <i>W</i> = <i>P</i><sub>ext</sub>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>) (Only valid if <i>P</i><sub>ext</sub> constant).<br>• First Law: Δ<i>U</i> = −<i>W</i> ⇒ <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub>) = −<i>P</i><sub>ext</sub>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>).<br>• Gas Law at endpoints: <i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> = <i>nRT</i><sub><i>i</i></sub>, <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> = <i>nRT</i><sub><i>f</i></sub>.<br>• Mechanical equilibrium at final state (piston stops): <i>P</i><sub><i>f</i></sub> = <i>P</i><sub>ext</sub>.<br>• <b>Two equations, two unknowns (<i>T</i><sub><i>f</i></sub>, <i>V</i><sub><i>f</i></sub> or <i>P</i><sub><i>f</i></sub>, <i>V</i><sub><i>f</i></sub>):</b><br>1. <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub>) = −<i>P</i><sub><i>f</i></sub>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>).<br>2. <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> = <i>nRT</i><sub><i>f</i></sub>.<br>• Solve for <i>T</i><sub><i>f</i></sub>, <i>V</i><sub><i>f</i></sub>. Compare with reversible adiabat <i>TV</i><sup><i>γ</i>−1</sup> = const.<br>• <b>Result:</b> For same initial state and same final pressure <i>P</i><sub><i>f</i></sub>, irreversible expansion does <b>less work</b> (<i>W</i><sub>irr</sub> < <i>W</i><sub>rev</sub>), so Δ<i>U</i> decreases less ⇒ <i>T</i><sub><i>f</i></sub><sup>irr</sup> > <i>T</i><sub><i>f</i></sub><sup>rev</sup>. Final volume <i>V</i><sub><i>f</i></sub><sup>irr</sup> > <i>V</i><sub><i>f</i></sub><sup>rev</sup> (because <i>V</i><sub><i>f</i></sub> = <i>nRT</i><sub><i>f</i></sub>/<i>P</i><sub><i>f</i></sub> with the same <i>P</i><sub><i>f</i></sub> and a higher <i>T</i><sub><i>f</i></sub>).<br>• Entropy: Δ<i>S</i><sub>gas</sub> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) + <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) > 0. Δ<i>S</i><sub>surr</sub> = 0. Δ<i>S</i><sub>univ</sub> > 0.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '1 mole of a monoatomic ideal gas (<i>C</i><sub><i>V</i></sub> = (3/2)<i>R</i>) at <i>T</i><sub><i>i</i></sub> = 300 K, <i>V</i><sub><i>i</i></sub> = 0.01 m<sup>3</sup> expands adiabatically against a constant external pressure <i>P</i><sub>ext</sub> = 10<sup>5</sup> Pa until mechanical equilibrium is reached. Find the final temperature <i>T</i><sub><i>f</i></sub>, final volume <i>V</i><sub><i>f</i></sub>, work done <i>W</i>, and entropy change Δ<i>S</i>. Compare <i>T</i><sub><i>f</i></sub> with the reversible adiabatic expansion to the same final pressure.',
        steps: [
          '<i>R</i> = 8.314. <i>P</i><sub><i>i</i></sub> = <i>nRT</i><sub><i>i</i></sub>/<i>V</i><sub><i>i</i></sub> = (1)(8.314)(300)/0.01 = 2.494 × 10<sup>5</sup> Pa.<br><i>P</i><sub>ext</sub> = 1.0 × 10<sup>5</sup> Pa. Final pressure <i>P</i><sub><i>f</i></sub> = <i>P</i><sub>ext</sub> = 10<sup>5</sup> Pa (mechanical equilibrium).',
          '<b>Equations.</b> With <i>W</i> the work done by the gas and <i>Q</i> = 0 (adiabatic):<br>Δ<i>U</i> = −<i>W</i> ⇒ (3/2)<i>R</i>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub>) = −<i>P</i><sub>ext</sub>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>),   <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> = <i>RT</i><sub><i>f</i></sub>',
          'Eliminating <i>V</i><sub><i>f</i></sub> = <i>RT</i><sub><i>f</i></sub>/<i>P</i><sub><i>f</i></sub> and solving symbolically:<br><i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub>) = −<i>P</i><sub><i>f</i></sub>(<i>RT</i><sub><i>f</i></sub>/<i>P</i><sub><i>f</i></sub> − <i>RT</i><sub><i>i</i></sub>/<i>P</i><sub><i>i</i></sub>) = −<i>RT</i><sub><i>f</i></sub> + <i>RT</i><sub><i>i</i></sub>(<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>)<br><i>T</i><sub><i>f</i></sub>(<i>C</i><sub><i>V</i></sub> + <i>R</i>) = <i>T</i><sub><i>i</i></sub>(<i>C</i><sub><i>V</i></sub> + <i>R</i>(<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>)) ⇒ <i>C</i><sub><i>P</i></sub><i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>(<i>C</i><sub><i>V</i></sub> + <i>R</i>(<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>))<br><i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>[1/<i>γ</i> + ((<i>γ</i> − 1)/<i>γ</i>) · (<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>)]',
          'With <i>γ</i> = 5/3 and <i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub> = 10<sup>5</sup>/(2.494 × 10<sup>5</sup>) = 0.401:<br><i>T</i><sub><i>f</i></sub> = 300[3/5 + (2/5)(0.401)] = 300(0.6 + 0.1604) = 300 × 0.7604 ≈ 228.1 K',
          'As expected for an expansion, <i>T</i><sub><i>f</i></sub> < <i>T</i><sub><i>i</i></sub>. Then <i>V</i><sub><i>f</i></sub> = <i>RT</i><sub><i>f</i></sub>/<i>P</i><sub><i>f</i></sub> = 8.314 × 228.1/10<sup>5</sup> ≈ 0.01896 m<sup>3</sup>, and<br><i>W</i> = <i>P</i><sub><i>f</i></sub>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>) = 10<sup>5</sup>(0.00896) ≈ 896 J,   Δ<i>U</i> = −<i>W</i> = −896 J',
          '<b>Check:</b> Δ<i>U</i> = <i>C</i><sub><i>V</i></sub>Δ<i>T</i> = 12.47 × (−71.9) ≈ −896 J, consistent.',
          '<b>Reversible adiabat to the same final pressure <i>P</i><sub><i>f</i></sub> = 10<sup>5</sup> Pa</b>, for comparison:<br><i>T</i><sub><i>f</i>,rev</sub> = <i>T</i><sub><i>i</i></sub>(<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>)<sup>(<i>γ</i>−1)/<i>γ</i></sup> = 300 (0.401)<sup>0.4</sup> = 300 <i>e</i><sup>0.4 ln 0.401</sup> = 300 <i>e</i><sup>−0.365</sup> ≈ 208 K',
          'So <i>T</i><sub><i>f</i></sub><sup>rev</sup>(208 K) < <i>T</i><sub><i>f</i></sub><sup>irr</sup>(228 K): the irreversible expansion against a constant <i>P</i><sub>ext</sub> does less work than the reversible path to the same final pressure (<i>W</i><sub>rev</sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i>,rev</sub>) = 12.47 × (300 − 208.2) ≈ 1145 J > <i>W</i><sub>irr</sub> ≈ 896 J), so it draws down less internal energy and cools less.',
          '<b>Entropy Change (Irrev):</b><br>Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) + <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>).<br>= 12.47 ln(228/300) + 8.314 ln(0.01896/0.01).<br>= 12.47(−0.275) + 8.314(0.640).<br>= −3.43 + 5.32 = 1.89 J/K > 0.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An ideal gas is confined in one half of a thermally insulated rigid container; the other half is vacuum. The partition is removed. The gas rushes to fill the whole container. Choose the correct statement(s):<br>(A) Work done by gas is zero.<br>(B) Internal energy decreases.<br>(C) Temperature remains constant.<br>(D) Entropy of gas increases.',
        steps: [
          '• Rigid container ⇒ No boundary movement ⇒ <i>W</i> = 0. (A) Correct.<br>• Insulated ⇒ <i>Q</i> = 0.<br>• First Law: Δ<i>U</i> = <i>Q</i> − <i>W</i> = 0. (B) Incorrect (does not decrease).<br>• Ideal Gas: <i>U</i> = <i>U</i>(<i>T</i>) ⇒ Δ<i>T</i> = 0. (C) Correct.<br>• Irreversible process. Δ<i>S</i><sub>gas</sub> = <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = <i>nR</i> ln 2 > 0. (D) Correct.',
        ],
        ans: '(A), (C), (D).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '2 moles of diatomic gas (<i>C</i><sub><i>V</i></sub> = 5<i>R</i>/2) at 400 K, occupying 10 L, expand adiabatically against constant <i>P</i><sub>ext</sub> = 1 atm until <i>P</i><sub><i>f</i></sub> = <i>P</i><sub>ext</sub>. Find <i>T</i><sub><i>f</i></sub>, <i>V</i><sub><i>f</i></sub>, <i>W</i>, Δ<i>S</i>. (<i>R</i> = 0.0821 L atm mol<sup>−1</sup> K<sup>−1</sup> or 8.314 J mol<sup>−1</sup> K<sup>−1</sup>).',
            a: '<i>P</i><sub><i>i</i></sub> = <i>nRT</i><sub><i>i</i></sub>/<i>V</i><sub><i>i</i></sub> = 2(0.0821)(400)/10 = 6.57 atm, <i>P</i><sub><i>f</i></sub> = 1 atm, so <i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub> = 0.152. <i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>[1/<i>γ</i> + ((<i>γ</i> − 1)/<i>γ</i>)(<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>)] with <i>γ</i> = 1.4: <i>T</i><sub><i>f</i></sub> = 400[0.7143 + 0.2857(0.152)] = 400 × 0.7578 ≈ 303 K.<br><i>V</i><sub><i>f</i></sub> = <i>nRT</i><sub><i>f</i></sub>/<i>P</i><sub><i>f</i></sub> = 2 × 0.0821 × 303/1 ≈ 49.8 L.<br><i>W</i> = <i>P</i><sub>ext</sub>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>) = 1 × (49.8 − 10) ≈ 39.8 L atm ≈ 4.03 × 10<sup>3</sup> J (check: <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> = 2(2.5)(8.314)(−97) ≈ −4.03 kJ = −<i>W</i>).<br>Δ<i>S</i> = 2[2.5<i>R</i> ln(303/400) + <i>R</i> ln(49.8/10)] = 2<i>R</i>[2.5(−0.277) + 1.605] ≈ 2 × 8.314 × 0.91 ≈ +15.2 J/K.',
          },
          {
            q: '<b>Free expansion, then reversible compression.</b> 1 mol of a monatomic gas (<i>C</i><sub><i>V</i></sub> = 3<i>R</i>/2) at 300 K undergoes free expansion from <i>V</i><sub><i>i</i></sub> to 2<i>V</i><sub><i>i</i></sub>, and is then compressed reversibly and adiabatically back to <i>V</i><sub><i>i</i></sub>. Find the final temperature and Δ<i>S</i><sub>univ</sub> for the whole process.',
            a: 'Free Exp: <i>T</i> const, <i>V</i>: <i>V</i> → 2<i>V</i>. Δ<i>S</i><sub>1</sub> = <i>R</i> ln 2.<br>Rev Adiabatic Comp 2<i>V</i> → <i>V</i>: <i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>(2)<sup><i>γ</i>−1</sup> = 300 × 2<sup>2/3</sup> = 300 × 1.587 ≈ 476 K. Δ<i>S</i><sub>2</sub> = 0.<br>Δ<i>S</i><sub>gas, total</sub> = <i>R</i> ln 2 > 0. Δ<i>S</i><sub>surr</sub> = 0. Δ<i>S</i><sub>univ</sub> = <i>R</i> ln 2 > 0.',
          },
          {
            q: 'A gas expands irreversibly and adiabatically from (<i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub>) to (<i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>) against constant <i>P</i><sub>ext</sub> = <i>P</i><sub>2</sub>. Show that <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>(<i>C</i><sub><i>V</i></sub> + <i>R</i>(<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub>))/<i>C</i><sub><i>P</i></sub>.',
            a: 'Derivation shown in worked example 1 (the symbolic solution for <i>T</i><sub><i>f</i></sub>).',
          },
          {
            q: '<b>True/False.</b> In an irreversible adiabatic expansion against constant external pressure, the work done is always less than the work done in a reversible adiabatic expansion between the same initial state and the same final pressure. (True/False).',
            a: '<b>True.</b> (As proven in worked example 1 analysis).',
          },
          {
            q: '1 mol monoatomic gas at 300 K, 1 atm expands adiabatically against constant <i>P</i><sub>ext</sub> = 0.5 atm until its pressure equals <i>P</i><sub>ext</sub>. Find the final temperature and final volume. (Hint: Use <i>W</i> = <i>P</i><sub>ext</sub>Δ<i>V</i>, Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> and <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> = <i>RT</i><sub><i>f</i></sub>).',
            a: '<i>V</i><sub><i>i</i></sub> = <i>RT</i><sub><i>i</i></sub>/<i>P</i><sub><i>i</i></sub> = 0.0821 × 300/1 = 24.63 L, and <i>V</i><sub><i>f</i></sub> = <i>RT</i><sub><i>f</i></sub>/0.5 = 0.1642 <i>T</i><sub><i>f</i></sub> (in L, with <i>T</i><sub><i>f</i></sub> in K).<br>Δ<i>U</i> = −<i>W</i>: 1.5(0.0821)(<i>T</i><sub><i>f</i></sub> − 300) = −0.5(<i>V</i><sub><i>f</i></sub> − 24.63) = −0.0821 <i>T</i><sub><i>f</i></sub> + 12.315.<br>0.2053 <i>T</i><sub><i>f</i></sub> = 49.26 ⇒ <i>T</i><sub><i>f</i></sub> = 240 K (same as <i>T</i><sub><i>i</i></sub>[0.6 + 0.4(0.5)]), and <i>V</i><sub><i>f</i></sub> = 0.1642 × 240 ≈ 39.4 L.<br>Check: <i>W</i> = 0.5(39.4 − 24.63) = 7.39 L atm ≈ 748 J and <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> = 12.47(−60) ≈ −748 J.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Entropy Accounting for Irreversible Processes: The Universe Ledger',
    extra: true,
    kalam:
      'The method is rigid: System entropy via a reversible path; Surroundings entropy via actual heat transfer at reservoir temperature.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 08 defines Δ<i>S</i> = ∫ d<i>Q</i><sub>rev</sub>/<i>T</i> and states Δ<i>S</i><sub>univ</sub> ≥ 0. JEE Advanced problems require you to actually compute Δ<i>S</i><sub>univ</sub> for specific irreversible processes: heat transfer across finite Δ<i>T</i>, irreversible adiabatic expansion (Addendum C), mixing of gases, or a cycle with an irreversible leg. The method is rigid: <b>System entropy via a reversible path; Surroundings entropy via actual heat transfer at reservoir temperature.</b>',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>System (Δ<i>S</i><sub>sys</sub>):</b> Identify initial and final equilibrium states (<i>T</i><sub><i>i</i></sub>, <i>V</i><sub><i>i</i></sub>/<i>P</i><sub><i>i</i></sub>) and (<i>T</i><sub><i>f</i></sub>, <i>V</i><sub><i>f</i></sub>/<i>P</i><sub><i>f</i></sub>). Construct any reversible path between them (e.g., isothermal + isochoric, or single polytropic if reversible). Compute Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) + <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>).',
          '<b>Surroundings (Δ<i>S</i><sub>surr</sub>):</b> Identify heat reservoirs interacting with the system. For each reservoir at constant <i>T</i><sub>res</sub>, Δ<i>S</i><sub>res</sub> = −<i>Q</i><sub>sys</sub>/<i>T</i><sub>res</sub>, where <i>Q</i><sub>sys</sub> is the heat absorbed by the system (positive if absorbed). Equivalently, Δ<i>S</i><sub>res</sub> = +<i>Q</i><sub>sys→res</sub>/<i>T</i><sub>res</sub> for heat flowing into the reservoir.<br>• If system absorbs <i>Q</i> from reservoir at <i>T</i><sub><i>H</i></sub>: Δ<i>S</i><sub>surr</sub> = −<i>Q</i>/<i>T</i><sub><i>H</i></sub>.<br>• If system rejects <i>Q</i> to reservoir at <i>T</i><sub><i>C</i></sub>: Δ<i>S</i><sub>surr</sub> = +|<i>Q</i>|/<i>T</i><sub><i>C</i></sub>.<br>• If process is adiabatic (<i>Q</i> = 0): Δ<i>S</i><sub>surr</sub> = 0.',
          '<b>Universe:</b> Δ<i>S</i><sub>univ</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub>.<br>• Must be ≥ 0. If < 0, recheck signs/arithmetic.<br>• = 0 only if all steps reversible.',
        ],
      },
      {
        t: 'p',
        html: '<b>Common Scenario: Two bodies at <i>T</i><sub><i>H</i></sub>, <i>T</i><sub><i>C</i></sub> brought into thermal contact (no work).</b><br>• Final <i>T</i><sub><i>f</i></sub> = (<i>C</i><sub><i>H</i></sub><i>T</i><sub><i>H</i></sub> + <i>C</i><sub><i>C</i></sub><i>T</i><sub><i>C</i></sub>)/(<i>C</i><sub><i>H</i></sub> + <i>C</i><sub><i>C</i></sub>) (heat capacities <i>C</i>).<br>• Δ<i>S</i><sub><i>H</i></sub> = <i>C</i><sub><i>H</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>H</i></sub>).<br>• Δ<i>S</i><sub><i>C</i></sub> = <i>C</i><sub><i>C</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>C</i></sub>).<br>• Δ<i>S</i><sub>univ</sub> = <i>C</i><sub><i>H</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>H</i></sub>) + <i>C</i><sub><i>C</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>C</i></sub>) > 0.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A rigid adiabatic container is divided into two equal volumes <i>V</i><sub>0</sub> by a partition. One side contains 1 mol of monoatomic ideal gas at <i>T</i><sub>1</sub> = 400 K; the other side is vacuum. The partition is removed (free expansion). After equilibrium, the gas is compressed reversibly and isothermally at temperature <i>T</i><sub><i>f</i></sub> back to volume <i>V</i><sub>0</sub> by a piston in contact with a reservoir at <i>T</i><sub><i>f</i></sub>. Find (a) <i>T</i><sub><i>f</i></sub>, (b) Δ<i>S</i><sub>gas</sub> for the full cycle (free expansion + compression), (c) Δ<i>S</i><sub>res</sub>, (d) Δ<i>S</i><sub>univ</sub>.',
        steps: [
          '<b>(a)</b> Free expansion of ideal gas: <i>Q</i> = 0, <i>W</i> = 0 ⇒ Δ<i>U</i> = 0 ⇒ <i>T</i><sub><i>f</i></sub> = <i>T</i><sub>1</sub> = 400 K.',
          '<b>(b) Cycle:</b> State A (<i>V</i><sub>0</sub>, 400K) —(Free Exp)→ State B (2<i>V</i><sub>0</sub>, 400K) —(Rev Isoth Comp)→ State A.<br>• Free Exp (Irrev): Δ<i>S</i><sub>gas, 1</sub> = <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = <i>R</i> ln 2.<br>• Rev Isoth Comp: Δ<i>S</i><sub>gas, 2</sub> = <i>nR</i> ln(<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>) = −<i>R</i> ln 2.<br>• Total Δ<i>S</i><sub>gas, cycle</sub> = 0. (State function, cycle closed).',
          '<b>(c) Reservoir:</b> Only interacts during isothermal compression.<br>Work done on gas during compression from 2<i>V</i><sub>0</sub> to <i>V</i><sub>0</sub>: <i>W</i><sub>on</sub> = <i>nRT</i> ln(2<i>V</i><sub>0</sub>/<i>V</i><sub>0</sub>) = <i>RT</i> ln 2.<br>Heat rejected by gas = Heat absorbed by reservoir: <i>Q</i><sub>res</sub> = +<i>RT</i> ln 2.<br>Δ<i>S</i><sub>res</sub> = <i>Q</i><sub>res</sub>/<i>T</i><sub>res</sub> = <i>R</i> ln 2.',
          '<b>(d) Universe:</b> Δ<i>S</i><sub>univ</sub> = Δ<i>S</i><sub>gas</sub> + Δ<i>S</i><sub>res</sub> = 0 + <i>R</i> ln 2 = <i>R</i> ln 2 > 0.',
          'The irreversibility of the free expansion is “paid for” by the entropy increase of the reservoir during the restoration step.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '100 g of water at 0°C is mixed with 100 g of water at 100°C in an insulated container. Find the entropy change of the universe. (<i>s</i><sub>water</sub> = 4.18 J/g K).',
        steps: [
          'Masses equal <i>m</i> = 100 g. <i>T</i><sub>1</sub> = 273 K, <i>T</i><sub>2</sub> = 373 K.',
          'Final Temp <i>T</i><sub><i>f</i></sub> = (<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 = 323 K.',
          'Δ<i>S</i><sub>cold</sub> = <i>ms</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub>1</sub>) = 100 × 4.18 × ln(323/273) = 418 × ln(1.183) = 418 × 0.1682 = 70.3 J/K.',
          'Δ<i>S</i><sub>hot</sub> = <i>ms</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub>2</sub>) = 418 × ln(323/373) = 418 × ln(0.866) = 418 × (−0.144) = −60.2 J/K.',
          'Δ<i>S</i><sub>univ</sub> = 70.3 − 60.2 = 10.1 J/K > 0.',
        ],
        // The book prints no answer line here; the result is the last step.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Two identical bodies of heat capacity <i>C</i> (constant) at temperatures <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub> (<i>T</i><sub>1</sub> > <i>T</i><sub>2</sub>) are brought into thermal contact in an isolated system. Find Δ<i>S</i><sub>univ</sub>. Show it is positive for <i>T</i><sub>1</sub> ≠ <i>T</i><sub>2</sub>.',
            a: '<i>T</i><sub><i>f</i></sub> = (<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2. Δ<i>S</i><sub>1</sub> = <i>C</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub>1</sub>), Δ<i>S</i><sub>2</sub> = <i>C</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub>2</sub>). Δ<i>S</i><sub>univ</sub> = <i>C</i> ln(<i>T</i><sub><i>f</i></sub><sup>2</sup>/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)) = <i>C</i> ln(((<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2)<sup>2</sup>/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)) = <i>C</i> ln((<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)<sup>2</sup>/(4<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)). By AM-GM, (<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)<sup>2</sup> ≥ 4<i>T</i><sub>1</sub><i>T</i><sub>2</sub>, so Δ<i>S</i> ≥ 0. Equality iff <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>.',
          },
          {
            q: '1 mol of monoatomic gas (<i>C</i><sub><i>V</i></sub> = 1.5<i>R</i>) at 300 K, 1 atm expands irreversibly and adiabatically against constant <i>P</i><sub>ext</sub> = 0.5 atm until <i>P</i><sub><i>f</i></sub> = <i>P</i><sub>ext</sub>. Find Δ<i>S</i><sub>gas</sub> and Δ<i>S</i><sub>univ</sub>.',
            a: 'From the method of Addendum C’s first worked example: <i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>[1/<i>γ</i> + ((<i>γ</i> − 1)/<i>γ</i>)(<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>)]. <i>γ</i> = 5/3, <i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub> = 0.5. <i>T</i><sub><i>f</i></sub> = 300[0.6 + 0.4(0.5)] = 300(0.8) = 240 K. <i>V</i><sub><i>f</i></sub> = <i>RT</i><sub><i>f</i></sub>/<i>P</i><sub><i>f</i></sub> = 8.314 × 240/(0.5 × 10<sup>5</sup>) = 0.0399 m<sup>3</sup>. <i>V</i><sub><i>i</i></sub> = 8.314 × 300/10<sup>5</sup> = 0.0249 m<sup>3</sup>.<br>Δ<i>S</i><sub>gas</sub> = 1.5<i>R</i> ln(240/300) + <i>R</i> ln(0.0399/0.0249) = 1.5<i>R</i>(−0.223) + <i>R</i>(0.47) = <i>R</i>(−0.335 + 0.47) = 0.135<i>R</i> = 1.12 J/K.<br>Δ<i>S</i><sub>surr</sub> = 0. Δ<i>S</i><sub>univ</sub> = 1.12 J/K.',
          },
          {
            q: 'A Carnot engine operates between 400 K and 300 K. In one cycle, it absorbs 1000 J from the hot reservoir. Due to a flaw, the work output is only 200 J (instead of 250 J). The extra 50 J is dissipated as heat into the cold reservoir (friction heating the sink). Find Δ<i>S</i><sub>univ</sub> for this cycle.',
            a: 'Hot Res (400 K): Loses 1000 J. Δ<i>S</i><sub><i>H</i></sub> = −1000/400 = −2.5 J/K.<br>Cold Res (300 K): Gains <i>Q</i><sub><i>C</i></sub> = <i>Q</i><sub><i>H</i></sub> − <i>W</i> = 1000 − 200 = 800 J. (Normally 750 J).<br>Δ<i>S</i><sub><i>C</i></sub> = +800/300 = +2.667 J/K.<br>Engine (Cycle): Δ<i>S</i><sub>eng</sub> = 0.<br>Δ<i>S</i><sub>univ</sub> = −2.5 + 2.667 = 0.167 J/K > 0.',
          },
          {
            q: '<b>Mixing.</b> 1 mol He and 1 mol Ne (both monoatomic) in separate 10 L containers at 300 K. Partition removed, gases mix in 20 L total. Find Δ<i>S</i><sub>mixing</sub>. (Assume ideal gases, no interaction).',
            a: 'Each gas expands from 10 L to 20 L isothermally at 300 K.<br>Δ<i>S</i><sub>He</sub> = <i>R</i> ln 2. Δ<i>S</i><sub>Ne</sub> = <i>R</i> ln 2.<br>Total Δ<i>S</i><sub>mix</sub> = 2<i>R</i> ln 2 = 11.5 J/K.',
          },
          {
            q: '<b>Stirling Engine with Imperfect Regenerator.</b> 1 mol monoatomic gas. Cycle: Isoth Exp <i>T</i><sub><i>H</i></sub> (<i>V</i><sub>1</sub> → <i>V</i><sub>2</sub>), Isochoric Cool <i>T</i><sub><i>H</i></sub> → <i>T</i><sub><i>C</i></sub> (gas rejects heat <i>Q</i><sub><i>R</i></sub>, of which the regenerator stores <i>ϵQ</i><sub><i>R</i></sub>), Isoth Comp <i>T</i><sub><i>C</i></sub> (<i>V</i><sub>2</sub> → <i>V</i><sub>1</sub>), Isochoric Heat <i>T</i><sub><i>C</i></sub> → <i>T</i><sub><i>H</i></sub> (gas needs heat <i>Q</i><sub><i>R</i></sub>, of which the regenerator returns <i>ϵQ</i><sub><i>R</i></sub>). If regenerator effectiveness is <i>ϵ</i> < 1 (stores and returns only <i>ϵQ</i><sub><i>R</i></sub>), find Δ<i>S</i><sub>univ</sub> per cycle in terms of <i>ϵ</i>, <i>T</i><sub><i>H</i></sub>, <i>T</i><sub><i>C</i></sub>, <i>Q</i><sub><i>R</i></sub>.',
            a: 'Hot Isochor (4→1): Needs heat <i>Q</i><sub><i>R</i></sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>). Gets <i>ϵQ</i><sub><i>R</i></sub> from regen, (1 − <i>ϵ</i>)<i>Q</i><sub><i>R</i></sub> from Hot Reservoir <i>T</i><sub><i>H</i></sub>.<br>Cold Isochor (2→3): Rejects <i>Q</i><sub><i>R</i></sub>. Gives <i>ϵQ</i><sub><i>R</i></sub> to regen, (1 − <i>ϵ</i>)<i>Q</i><sub><i>R</i></sub> to Cold Reservoir <i>T</i><sub><i>C</i></sub>.<br>Hot Res: Loses (1 − <i>ϵ</i>)<i>Q</i><sub><i>R</i></sub> at <i>T</i><sub><i>H</i></sub> ⇒ Δ<i>S</i><sub><i>H</i></sub> = −(1 − <i>ϵ</i>)<i>Q</i><sub><i>R</i></sub>/<i>T</i><sub><i>H</i></sub>.<br>Cold Res: Gains (1 − <i>ϵ</i>)<i>Q</i><sub><i>R</i></sub> at <i>T</i><sub><i>C</i></sub> ⇒ Δ<i>S</i><sub><i>C</i></sub> = +(1 − <i>ϵ</i>)<i>Q</i><sub><i>R</i></sub>/<i>T</i><sub><i>C</i></sub>.<br>Regenerator (Cycle): Δ<i>S</i><sub>reg</sub> = 0. Gas (Cycle): Δ<i>S</i><sub>gas</sub> = 0.<br>Δ<i>S</i><sub>univ</sub> = (1 − <i>ϵ</i>)<i>Q</i><sub><i>R</i></sub>(1/<i>T</i><sub><i>C</i></sub> − 1/<i>T</i><sub><i>H</i></sub>) > 0.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Compound Carnot Systems: Engines Driving Refrigerators & Cascades',
    extra: true,
    kalam:
      'The method is always energy conservation at the coupling point (work equality or heat equality) plus the Carnot relations.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 07 gives the standalone Carnot efficiency. JEE Advanced combines devices: a Carnot engine drives a Carnot refrigerator; two Carnot engines in series (cascade) where the heat rejected by the first is absorbed by the second; or a Carnot heat pump heating a house using work from a Carnot engine. The method is always <b>energy conservation at the coupling point</b> (work equality or heat equality) plus the Carnot relations <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, COP<sub>ref</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Draw the schematic.</b> Label reservoirs <i>T</i><sub>1</sub> > <i>T</i><sub>2</sub> > <i>T</i><sub>3</sub> …. Label devices (Engine E, Fridge R, Pump P). Label heat flows <i>Q</i> and work <i>W</i> with arrows.',
          '<b>Write Carnot relations for each device.</b><br>• Engine (between <i>T</i><sub><i>H</i></sub>, <i>T</i><sub><i>C</i></sub>): <i>η</i> = <i>W</i>/<i>Q</i><sub><i>H</i></sub> = 1 − <i>T</i><sub><i>C</i></sub>/<i>T</i><sub><i>H</i></sub> ⇒ <i>Q</i><sub><i>C</i></sub> = <i>Q</i><sub><i>H</i></sub><i>T</i><sub><i>C</i></sub>/<i>T</i><sub><i>H</i></sub>.<br>• Fridge (between <i>T</i><sub><i>C</i></sub>, <i>T</i><sub><i>H</i></sub>): COP = <i>Q</i><sub><i>C</i></sub>/<i>W</i> = <i>T</i><sub><i>C</i></sub>/(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>) ⇒ <i>Q</i><sub><i>H</i></sub> = <i>Q</i><sub><i>C</i></sub> + <i>W</i> = <i>Q</i><sub><i>C</i></sub><i>T</i><sub><i>H</i></sub>/<i>T</i><sub><i>C</i></sub>.<br>• Heat Pump: COP = <i>Q</i><sub><i>H</i></sub>/<i>W</i> = <i>T</i><sub><i>H</i></sub>/(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>).',
          '<b>Apply Coupling Constraints.</b><br>• Engine drives Fridge: <i>W</i><sub>engine</sub> = <i>W</i><sub>fridge</sub>.<br>• Cascade Engines: <i>Q</i><sub>rej, 1</sub> = <i>Q</i><sub>abs, 2</sub>.<br>• Engine drives Heat Pump heating <i>T</i><sub><i>H</i></sub>: <i>W</i><sub>eng</sub> = <i>W</i><sub>hp</sub>.',
          '<b>Solve for required ratio</b> (e.g., <i>Q</i><sub>cold extracted</sub>/<i>Q</i><sub>hot supplied</sub>, or overall COP).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A Carnot engine operates between a hot reservoir at <i>T</i><sub>1</sub> = 600 K and a cold reservoir at <i>T</i><sub>2</sub> = 300 K. The work output drives a Carnot refrigerator operating between <i>T</i><sub>2</sub> = 300 K (cold space) and <i>T</i><sub>3</sub> = 400 K (hot reservoir). Find the ratio of heat extracted from the cold space (<i>Q</i><sub><i>C</i>,ref</sub>) to heat absorbed from the hottest reservoir (<i>Q</i><sub><i>H</i>,eng</sub>).',
        steps: [
          '<b>Engine (600 K → 300 K):</b><br><i>η</i><sub><i>E</i></sub> = 1 − 300/600 = 1/2.<br><i>W</i> = <i>η</i><sub><i>E</i></sub><i>Q</i><sub><i>H</i>,<i>E</i></sub> = ½<i>Q</i><sub><i>H</i>,<i>E</i></sub>.<br><i>Q</i><sub><i>C</i>,<i>E</i></sub> = <i>Q</i><sub><i>H</i>,<i>E</i></sub> − <i>W</i> = ½<i>Q</i><sub><i>H</i>,<i>E</i></sub>. (Rejected to 300 K reservoir).',
          '<b>Refrigerator (300 K → 400 K):</b><br>COP<sub><i>R</i></sub> = <i>T</i><sub><i>C</i></sub>/(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>) = 300/(400 − 300) = 3.<br><i>W</i> = <i>W</i> (same shaft).<br><i>Q</i><sub><i>C</i>,<i>R</i></sub> = COP<sub><i>R</i></sub> · <i>W</i> = 3 × ½<i>Q</i><sub><i>H</i>,<i>E</i></sub> = 1.5<i>Q</i><sub><i>H</i>,<i>E</i></sub>.',
          '<b>Ratio:</b> <i>Q</i><sub><i>C</i>,<i>R</i></sub>/<i>Q</i><sub><i>H</i>,<i>E</i></sub> = 1.5.<br>The compound device extracts 1.5 J from 300 K for every 1 J taken from 600 K.',
          '(Note: the refrigerator dumps <i>Q</i><sub><i>H</i>,<i>R</i></sub> = <i>Q</i><sub><i>C</i>,<i>R</i></sub> + <i>W</i> = 1.5<i>Q</i><sub><i>H</i>,<i>E</i></sub> + 0.5<i>Q</i><sub><i>H</i>,<i>E</i></sub> = 2<i>Q</i><sub><i>H</i>,<i>E</i></sub> into the 400 K reservoir. The 300 K reservoir receives <i>Q</i><sub><i>C</i>,<i>E</i></sub> = 0.5<i>Q</i><sub><i>H</i>,<i>E</i></sub> from the engine and supplies <i>Q</i><sub><i>C</i>,<i>R</i></sub> = 1.5<i>Q</i><sub><i>H</i>,<i>E</i></sub> to the fridge, so the net heat drawn out of the 300 K reservoir is 1.5 − 0.5 = 1.0 <i>Q</i><sub><i>H</i>,<i>E</i></sub>. Energy check: 1.0 <i>Q</i><sub><i>H</i>,<i>E</i></sub> (from 600 K) + 1.0 <i>Q</i><sub><i>H</i>,<i>E</i></sub> (net from 300 K) = 2 <i>Q</i><sub><i>H</i>,<i>E</i></sub> (into 400 K).)',
        ],
        // The book prints no answer line here; the result is the "Ratio" step.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two Carnot engines A and B are operated in series. Engine A receives heat <i>Q</i><sub>1</sub> at <i>T</i><sub>1</sub> = 900 K and rejects heat <i>Q</i><sub>2</sub> at <i>T</i><sub>2</sub>. Engine B receives <i>Q</i><sub>2</sub> and rejects heat <i>Q</i><sub>3</sub> at <i>T</i><sub>3</sub> = 300 K. If the work outputs of A and B are equal, find <i>T</i><sub>2</sub> and the overall efficiency of the combined system.',
        steps: [
          'Engine A: <i>W</i><sub><i>A</i></sub> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub>(1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>).',
          'Engine B: <i>W</i><sub><i>B</i></sub> = <i>Q</i><sub>2</sub> − <i>Q</i><sub>3</sub> = <i>Q</i><sub>2</sub>(1 − <i>T</i><sub>3</sub>/<i>T</i><sub>2</sub>) = <i>Q</i><sub>1</sub>(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)(1 − <i>T</i><sub>3</sub>/<i>T</i><sub>2</sub>).',
          'Given <i>W</i><sub><i>A</i></sub> = <i>W</i><sub><i>B</i></sub>:<br><i>Q</i><sub>1</sub>(1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) = <i>Q</i><sub>1</sub>(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)(1 − <i>T</i><sub>3</sub>/<i>T</i><sub>2</sub>).<br>1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> − <i>T</i><sub>3</sub>/<i>T</i><sub>1</sub>.<br>1 = 2<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> − <i>T</i><sub>3</sub>/<i>T</i><sub>1</sub>.<br>2<i>T</i><sub>2</sub> = <i>T</i><sub>1</sub> + <i>T</i><sub>3</sub> = 900 + 300 = 1200.<br><i>T</i><sub>2</sub> = 600 K.',
          'Overall Efficiency: <i>η</i><sub>overall</sub> = (<i>W</i><sub><i>A</i></sub> + <i>W</i><sub><i>B</i></sub>)/<i>Q</i><sub>1</sub> = 2<i>W</i><sub><i>A</i></sub>/<i>Q</i><sub>1</sub> = 2<i>η</i><sub><i>A</i></sub> = 2(1 − 600/900) = 2/3 = 66.7%.',
          '<b>Check:</b> Single Carnot 900→300: <i>η</i> = 1 − 300/900 = 66.7%. Matches Carnot’s theorem (reversible composite = single reversible).',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A Carnot engine (500 K, 300 K) drives a Carnot refrigerator (300 K, 400 K). Find heat extracted from 300 K per 1000 J from 500 K.',
            a: 'Engine: <i>η</i> = 1 − 3/5 = 0.4. <i>W</i> = 0.4<i>Q</i><sub><i>H</i></sub>. Fridge: COP = 300/(400 − 300) = 3. <i>Q</i><sub><i>C</i></sub> = 3<i>W</i> = 1.2<i>Q</i><sub><i>H</i></sub>. For <i>Q</i><sub><i>H</i></sub> = 1000, <i>Q</i><sub><i>C</i></sub> = 1200 J.',
          },
          {
            q: 'A Carnot heat pump maintains a house at 300 K when outside is 270 K. The pump is driven by a Carnot engine operating between 600 K and 300 K. Find heat delivered to house per 1000 J from 600 K reservoir.',
            a: 'Engine: <i>η</i> = 1 − 300/600 = 0.5. <i>W</i> = 500 J. Pump: COP = 300/(300 − 270) = 10.<br><i>Q</i><sub><i>H</i></sub> = 10 × 500 = 5000 J.',
          },
          {
            q: 'Three Carnot engines in cascade between <i>T</i><sub>1</sub> = 1000 K, <i>T</i><sub>2</sub>, <i>T</i><sub>3</sub>, <i>T</i><sub>4</sub> = 300 K. Work outputs equal. Find <i>T</i><sub>2</sub>, <i>T</i><sub>3</sub>.',
            a: '<i>W</i><sub>1</sub> = <i>W</i><sub>2</sub> = <i>W</i><sub>3</sub>. <i>Q</i><sub>1</sub>(1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) = <i>Q</i><sub>1</sub>(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)(1 − <i>T</i><sub>3</sub>/<i>T</i><sub>2</sub>) = <i>Q</i><sub>1</sub>(<i>T</i><sub>3</sub>/<i>T</i><sub>1</sub>)(1 − <i>T</i><sub>4</sub>/<i>T</i><sub>3</sub>).<br>1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> − <i>T</i><sub>3</sub>/<i>T</i><sub>1</sub> ⇒ <i>T</i><sub>2</sub> = (<i>T</i><sub>1</sub> + <i>T</i><sub>3</sub>)/2.<br><i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> − <i>T</i><sub>3</sub>/<i>T</i><sub>1</sub> = <i>T</i><sub>3</sub>/<i>T</i><sub>1</sub> − <i>T</i><sub>4</sub>/<i>T</i><sub>1</sub> ⇒ <i>T</i><sub>3</sub> = (<i>T</i><sub>2</sub> + <i>T</i><sub>4</sub>)/2.<br>Sub <i>T</i><sub>2</sub>: <i>T</i><sub>3</sub> = (<i>T</i><sub>1</sub> + <i>T</i><sub>3</sub>)/4 + <i>T</i><sub>4</sub>/2 ⇒ 4<i>T</i><sub>3</sub> = <i>T</i><sub>1</sub> + <i>T</i><sub>3</sub> + 2<i>T</i><sub>4</sub> ⇒ 3<i>T</i><sub>3</sub> = <i>T</i><sub>1</sub> + 2<i>T</i><sub>4</sub> = 1000 + 600 = 1600 ⇒ <i>T</i><sub>3</sub> = 533.3 K.<br><i>T</i><sub>2</sub> = (1000 + 533.3)/2 = 766.7 K.',
          },
          {
            q: 'An inventor claims a device: Heat <i>Q</i><sub>1</sub> from <i>T</i><sub>1</sub>, Work <i>W</i> output, Heat <i>Q</i><sub>2</sub> to <i>T</i><sub>2</sub> (<i>T</i><sub>2</sub> < <i>T</i><sub>1</sub>). He claims <i>W</i>/<i>Q</i><sub>1</sub> > 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>. You couple it to a Carnot refrigerator between <i>T</i><sub>2</sub>, <i>T</i><sub>1</sub>. Show a violation of Clausius.',
            a: 'Let X take <i>Q</i><sub>1</sub> from <i>T</i><sub>1</sub>, deliver <i>W</i><sub><i>X</i></sub> > (1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<i>Q</i><sub>1</sub> and reject <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i><sub><i>X</i></sub> < (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<i>Q</i><sub>1</sub> to <i>T</i><sub>2</sub>.<br>Use all of <i>W</i><sub><i>X</i></sub> to run the Carnot fridge C: it extracts <i>Q</i><sub><i>C</i></sub> = <i>W</i><sub><i>X</i></sub><i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) > (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<i>Q</i><sub>1</sub> > <i>Q</i><sub>2</sub> from <i>T</i><sub>2</sub> and delivers <i>Q</i><sub><i>C</i></sub> + <i>W</i><sub><i>X</i></sub> to <i>T</i><sub>1</sub>.<br>Net effect per cycle: no work in or out; <i>T</i><sub>2</sub> loses <i>Q</i><sub><i>C</i></sub> − <i>Q</i><sub>2</sub> > 0 and <i>T</i><sub>1</sub> gains (<i>Q</i><sub><i>C</i></sub> + <i>W</i><sub><i>X</i></sub>) − <i>Q</i><sub>1</sub> = <i>Q</i><sub><i>C</i></sub> − <i>Q</i><sub>2</sub>. Heat has moved from <i>T</i><sub>2</sub> to <i>T</i><sub>1</sub> with no other effect: a Clausius violation.',
          },
          {
            q: '<b>Advanced.</b> A Carnot engine operates between <i>T</i><sub><i>H</i></sub> and <i>T</i><sub><i>C</i></sub>. Its work output is used to run a Carnot heat pump between <i>T</i><sub><i>C</i></sub> and <i>T</i><sub><i>H</i></sub> (heating the hot reservoir). Find the ratio of heat delivered to <i>T</i><sub><i>H</i></sub> by the pump to heat extracted from <i>T</i><sub><i>H</i></sub> by the engine.',
            a: 'Engine (<i>T</i><sub><i>H</i></sub> → <i>T</i><sub><i>C</i></sub>): takes <i>Q</i><sub><i>H</i></sub> from the hot reservoir, does work <i>W</i> = <i>Q</i><sub><i>H</i></sub>(1 − <i>T</i><sub><i>C</i></sub>/<i>T</i><sub><i>H</i></sub>) = <i>Q</i><sub><i>H</i></sub><i>η</i>, rejects <i>Q</i><sub><i>C</i></sub> = <i>Q</i><sub><i>H</i></sub> − <i>W</i> to the cold reservoir.<br>Pump (<i>T</i><sub><i>C</i></sub> → <i>T</i><sub><i>H</i></sub>), driven by exactly this <i>W</i>: COP = <i>T</i><sub><i>H</i></sub>/(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>) = 1/<i>η</i>, so it delivers <i>Q</i><sub><i>H</i>,pump</sub> = COP · <i>W</i> = (1/<i>η</i>)(<i>ηQ</i><sub><i>H</i></sub>) = <i>Q</i><sub><i>H</i></sub> to the hot reservoir, extracting <i>Q</i><sub><i>H</i>,pump</sub> − <i>W</i> = <i>Q</i><sub><i>H</i></sub> − <i>ηQ</i><sub><i>H</i></sub> = <i>Q</i><sub><i>C</i></sub> from the cold reservoir.<br><b>Ratio</b> = <i>Q</i><sub><i>H</i>,pump</sub>/<i>Q</i><sub><i>H</i></sub> = 1.<br>Tracing the net effect on each reservoir: the hot reservoir loses <i>Q</i><sub><i>H</i></sub> to the engine and gains <i>Q</i><sub><i>H</i></sub> back from the pump — no net change. The cold reservoir gains <i>Q</i><sub><i>C</i></sub> from the engine’s exhaust and loses exactly <i>Q</i><sub><i>C</i></sub> back to the pump’s intake — no net change either. The work <i>W</i> generated by the engine is entirely consumed running the pump, so no net external work crosses the system boundary. Nothing net happens to either reservoir: running an ideal (Carnot) engine forward and using its own output to drive an ideal pump back between the same two reservoirs is exactly equivalent to running one Carnot cycle forward and then immediately in reverse — a thermodynamically consistent, if pointless, round trip, not a Clausius violation.',
          },
        ],
      },
    ],
  },
];
