# Design divergences

Intentional corrections and responsive decisions that differ from the source Figma frames.

| Area | Source design | Implementation |
| --- | --- | --- |
| How it works labels | All three desktop labels read `STEP 01`. | Corrected to `STEP 01`, `STEP 02` and `STEP 03` to preserve the sequence. |
| How it works orange icon | The exported mobile frame renders the icon background as `#FAE4DA`, while desktop uses `#FFCB9F`. | Treats the desktop color as an inconsistency and uses the mobile color (`#FAE4DA`) at both sizes. |
| Step label contrast | The original gray misses the 4.5:1 contrast threshold on cream. | Adjusted from `#6d7384` to `#6c7283`. |
| Contact form copy (mobile) | The mobile frame carries Portuguese form copy (`Nome completo`, `Enviar mensagem`, …) while desktop uses English — inconsistent content across frames. | Treated as a Figma typo; both breakpoints render the English copy. |
| Inverse text link ("Browse all courses") | The design's softened white (`#e7e7ec`) on the blue section measures 4.46:1, below the 4.5:1 threshold for 14px bold text. | Uses pure white (`#ffffff`, 5.49:1) with the same hover behavior as the other solid CTAs (opacity). |

These changes preserve the supplied visual direction while correcting an apparent content typo, accessibility, and behavior at widths not represented in Figma.
