---
title: "Typeface Space (Thesis)"
toc: false
socialShare: false
enableReadingTime: false
draft: false
---

According to Karen Cheng's *Designing Type,* there currently exist around 300,000 typefaces. Compared to the handful of fonts accessible to users on the first machines which allowed users to pick a typeface, this is a dramatic increase. Surprisingly, however, the method by which users choose between these fonts has remained almost entirely static.

<figure>
  <img
  src="/images/thesis/xerox-star.png"
  alt="Xerox Star Font Selection">
  <figcaption>Font selection interface on the Xerox Star machine (1981)</figcaption>
</figure>

The Xerox Star workstation (1981) had one of the first word processors which allowed users to select between multiple fonts. Shown above, the interface allowed users to scroll through a linear list of fonts (Classic, Modern, Titan, Bold...) to choose between them. This may seem familiar, because the same exact tool is used in almost every major word processor out today.

<figure>
  <img
  src="/images/thesis/font-selectors.png"
  alt="Today's Font Selectors">
  <figcaption>Font selection interfaces in Microsoft Word, Google Docs, and Apple Pages (left to right)</figcaption>
</figure>

The above font selection tools are almost identical to the 44-year-old Xerox Star interface, with two slight differences: the fonts in our modern selection interfaces are displayed in their own typeface, which certainly helps users find the font they are looking for, and the fonts are also alphabetized. Alphabetical order is helpful if the user already know which font they are looking for, but the order does not actually signify anything about the font's *style,* making it a generally unhelpful addition.

Given the plethora of fonts available to users today—compared with the handful that were accessible when this linear list selector was first introduced—users are in need of better font selection tools. Certain font provider services such as Google Fonts and Canva have introduced category-based and natural-language-based tools to help users navigate this space and find a font for their needs, but these tools are not particularly accurate and have not caught on widely.

To address this issue, I've been working with Professors Jeannie Albrecht and Mark Hopkins over the past six months on using neural networks–primarily variational autoencoders (VAEs)—to encode font style, in order to create better font selection tools. The project is currently a work-in-progresss until May 9th, but my preliminary results suggest that this approach can yield useful font selection tools. You can try out my most recent tool, which navigates a 6-dimension stylistic latent space on the Google Fonts dataset, [here](http://sysnet.cs.williams.edu/~25sm39/):

<figure>
  <a href="http://sysnet.cs.williams.edu/~25sm39/">
    <img
    src="/images/thesis/google-fontspace-selector.png"
    alt="Today's Font Selectors">
  </a>
  <figcaption>My current tool for navigating the model's latent space</figcaption>
</figure>

Updates to my thesis project will be posted on this page. You can find the slides from my thesis proposal presentation [here](/presentation.pdf). Feel free to reach out with any questions!