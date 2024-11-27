# Clear Compose
### Description
Clear Compose is an intelligent email editor that helps users craft well-balanced, professional emails by analyzing and suggesting tone adjustments. Built with a modern tech stack, Clear compose combines a sleek ReactJSX frontend styled with TailwindCSS and a robust Python Flask backend for powerful sentiment analysis and tone-enhancing suggestions.
- Integrates the VADER Sentiment Analysis tool to analyze the tone of the email, identifying positive, neutral, or negative sentiments, for selecting individual sentences to be rephrased or adjusted and highlighted that contribute negatively to the tone of the email.
- Utilizes LlaMa (an advanced language model) to suggest rewrites for sentences or phrases to match the desired tone (e.g., more formal, casual, or empathetic).
### Workflow
1. Create a branch from dev
2. make your changes on your branch
3. push your changes to dev
4. resolve conflicts
5. delete your branch and repeat steps 1-5

### Requirements:
- Node
- Chrome Browser

### How to run web application
1) clone the repository
2) run the following commands:
```bash
cd .\CSC4240-final-project\Clear-Compose-app\frontend\
npm i
npm run dev
```
3) open http://localhost:5173 in a chrome browser
### Usage
1) Select sender and recipient from the dropdown menus
2) copy and paste an email into the text area
3) click the 'submit' button
4) hover highlighted text and click to replace sentences with the rephrased sentences from the LLM.


