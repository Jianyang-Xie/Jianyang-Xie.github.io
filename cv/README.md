# Updating the Academic CV

Edit `main.tex`, commit and push to `main`. GitHub Actions compiles the source, saves the PDF at `assets/cv/Jianyang_Xie_CV.pdf`, and explicitly requests a GitHub Pages rebuild. The current Pages source remains `main` / root.

`main.tex` is the only active CV source. The BibTeX and JSON files are metadata snapshots; they do not automatically change the PDF. Keep them in sync when editing bibliographic information.

The CV is public, including the contact information present in its source. PDF build errors stop publication and leave the previous PDF intact. You can download a build preview from the workflow's `academic-cv` artifact. Use Actions → Build Academic CV → Run workflow to rebuild manually.
