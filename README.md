# STATISTICAL TIMELINE 
## From Classical Statistics to Modern AI

**Updated:** June 22, 2025

---
### Table of Contents
- [1. Description](#1-description)
- [2. Live demo](#2-live-demo)
- [3. Project Files](#3-project-files)
- [4. Project Details](#4-project-details)
- [5. Contributors](#5-contributors)
- [6. License](#6-license)
- [7. Citation](#7-citation)
  - [APA style](#apa-style)
  - [BibTeX](#bibtex)
---

### 1. Description

This project presents an interactive timeline highlighting key milestones in the history of statistics, tracing its evolution from foundational figures like **De Moivre** and **Bayes** to modern developments in **artificial intelligence** and **deep learning**.

The visualization was developed in `RStudio` using the [`r2d3`](https://cran.r-project.org/web/packages/r2d3/index.html) package, which enables the integration of D3.js graphics into R.

---

### 2. Live demo
<p style="font-size: 0.1em;">🔝 <a href="#table-of-contents">Toc</a></p>

The timeline can be viewed at [this RPubs link](https://rpubs.com/hllinas/R_Stat_to_AI_Timeline), which serves as the main visualization. An applied version is also available in [another set of lecture notes](https://rpubs.com/hllinas/R_Multivariado_Historia).

An example of how the timeline looks (without interactivity) is shown in the image below:  

![Timeline Preview](./Timeline1.png)

### 3. Project Files
<p style="font-size: 0.1em;">🔝 <a href="#table-of-contents">Toc</a></p>

This repository includes all relevant files used to build the timeline:

- `History.Rmd` – R Markdown file with the full timeline script
- `History.html` – Interactive timeline in HTML format, generated from the R Markdown file
- `script.js` – JavaScript code used in the `r2d3` visualization  
- `DataBase.xlsx` – Excel file containing the historical data
- `Timeline1.png` – Static image preview of the timeline (non-interactive version)  

> When you hover the mouse pointer over each arrow, a tooltip displays the description of the historical event, as specified in the Excel file.  
To update the timeline, simply modify the data in the Excel file and re-run the R Markdown (`.Rmd`) script to generate the new output.
---

### 4. Project Details
<p style="font-size: 0.1em;">🔝 <a href="#table-of-contents">Toc</a></p>

- **Tool:** RStudio  
- **Library:** `r2d3`  
- **Output:** Interactive D3-based timeline  
- **Focus:** Historical development of statistical theory and its connection to modern AI  

### 6. Contributors
<p style="font-size: 0.1em;">🔝 <a href="#table-of-contents">Toc</a></p>

- Dr. rer. nat. Humberto Llinás Solano (hllinas@uninorte.edu.co)¹ 
- Alexander Rangel Vizcaíno (alexanderrangel@uninorte.edu.co)¹
- Daniela Nuñez Guzmán (nunezdm@uninorte.edu.co)¹

  > ¹ Department of Mathematics and Statistics, Universidad del Norte, Barranquilla, Colombia.
---

### 5. License
<p style="font-size: 0.1em;">🔝 <a href="#table-of-contents">Toc</a></p>

This project is intended for educational and academic use. If you use or adapt any part of it, please make sure to cite it appropriately.

### 6. Citation

To cite this repository in your academic work, teaching, or research:

#### APA style

> Llinás, H., Rangel, A., & Nuñez, D. (2025). *Statistical timeline: From classical statistics to modern AI* [GitHub repository].
  GitHub. https://github.com/hllinas/Stats-to-AI-Timeline

#### BibTeX

```bibtex
@misc{llinas2025timeline,
  author       = {Humberto Llinás, Alexánder Rangel, Daniela Nuñez},
  title        = {Statistical timeline: From Classical Statistics to Modern AI},
  year         = {2025},
  howpublished = {\url{https://github.com/usuario/statistical-timeline}},
  note         = {GitHub repository}
}
