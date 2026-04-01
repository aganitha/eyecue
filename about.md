---
layout: default
title: About EyeCue
permalink: /about/
---

<div class="content-box" markdown="1">

# About EyeCue

EyeCue is a multimodal AI agent to interpret molecular dynamics (MD) trajectories and generate audio-visual explanations.

## How It Works

EyeCue transforms long molecular dynamics (MD) trajectories into compact, annotated, multi-view videos suitable for direct analysis by a multimodal large language model (LLM). When prompted to “watch”, the LLM produces structured, frame-indexed narration that explicitly references temporal segments to justify observations related to ligand binding, pose reorientation, and conformational transitions. 

Generated  narration text is converted to speech using a Text-to-speech (TTS) model. Key frames corresponding to structural events or transitions are programmatically identified, and the audio timeline is matched to these frames. 

EyeCue then stitches the annotated frames and narration track into a final explanatory video that presents the LLM’s interpretation as synchronized, continuous commentary. This step provides a natural-language walkthrough of molecular motion, similar to expert verbal narration of simulation playback.

## Research Citation

To know more, checkout our publication:

> **Seeing Like a Structural Biologist: EyeCue, a Multimodal AI Agent for Interpreting MD Trajectories with Audio-Visual Explanations**  
> *Rajkumar Chakraborty, Irum Hussain, Gnapika Arelli, Yamini Krishna Musku, Kumari Soniya and Prasad Chodavarapu*  
> *ChemRxiv, 2026*  
> *DOI: TBD*


</div>
