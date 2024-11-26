# CSC 4240/5240 - Artificial Intelligence  
## Final Project [100 points]

As stated at the beginning of this class, the final project will focus on **USING** the available AI tools rather than developing them. You will need to find the best AI tools to solve an interesting problem.

### Problem Statement
We all send and receive emails every day; however, emails are often misinterpreted or misread due to the lack of in-person interaction, which opens the door for the receiver to read the email according to their mood. The sender could also suffer from a bad mood or lack of good language skills, which can lead to poor wording or hostile language. You may think of other reasons as well. Your job is to use the existing AI tools, including **Text Analysis, Natural Language Processing (NLP), Computer Vision (CV)**, etc., to come up with an automated solution given an input email. **Go Creative!**

Well-developed ideas can be augmented, polished, and published in a conference after the semester ends. They can also be part of a bigger project that students can complete and publish. At the very least, you can prepare a poster and present it in a local or national venue.

### Project Groups
The final project will be group-based. A project team will consist of a maximum of 5 CSC4240 students or 3 CSC5240 students. Please find teammates and sign up your team in this spreadsheet. A maximum of 12 CSC4240 teams and 4 CSC5240 teams are allowed. You can use the group discussion on iLearn to find teammates with shared interests. The instructor may reduce or merge teams if needed.

### Methodology
For your work to be automated, you will need to write some code that connects the AI tools/techniques you ended up using. You can choose whatever programming language you are comfortable with as long as you can provide executable code along with instructions to run it. **Python notebooks** are preferred because they are easy to run, but anything else is acceptable as long as it can be tested.

Your work should include some form of **evaluation**. You can do a quick experiment with a number of your friends. You can consult professors with experience in experiment design to ensure unbiased evaluation.

### Evaluation Criteria
Evaluation of your project will be based primarily on the final project report and presentation. The evaluation criteria are:

- **Effort**: This includes ideas and techniques explored and tried. Aside from your final product, you will need to document the major experiments/ideas you tried and abandoned, and report on them to show your effort.
- **Evaluation**: Better experiment design and execution will be rewarded.
- **Novelty**: This includes innovation in your proposed solution(s).
- **Technical Quality**: This includes the AI techniques used and their fitness to the addressed problem or aspect of the problem (your solution can be multi-dimensional). You should have a broad understanding of the tools/techniques you are going to use and be ready to defend your choices.

### Mentoring
You are encouraged to stop by the instructor’s and TAs’ office hours for guidance and advice on your design choices. You are also welcome to schedule a meeting with the instructor to discuss progress attained so far. There may be a mandatory check-in meeting for all groups to ensure progress and avoid last-minute surprises.

### Grade Distribution
The final project grade will be distributed as follows:
1. **Report + Code**: 50%
2. **Presentation**: 25%
3. **Peer evaluation**: 25%

### Project Deliverables and Timeline
1. **Project Teams Formed** (Due Oct 9)  
   Unassigned students and small teams will be merged.

2. **Project Report + Code** (Due Nov 26)  
   - CSC4240 teams should prepare a maximum 4-page project report (points will be deducted for extra pages).  
   - CSC5240 students will submit a maximum 6-page report in a research paper format (excluding references) that includes a literature review section on the technologies they used.

   Your report should include:
   - A clearly articulated solution and methodology.
   - Different experimented/tried ideas, if any, and why they were abandoned.
   - Implementation details, including figures and tables as needed.
   - Performance evaluation.
   - A detailed section about the contribution of each team member.

   You can use generative AI or internet search to find code to do your tasks. However, I encourage you to take this opportunity to learn by writing your code. This is an upper-level/grad course. Good software engineering principles are expected in your code. A **README file** should be included to instruct us on how to run your code (including any needed dependencies). Projects submitted with no instructions will be penalized if the code does not easily run.

3. **Final Presentation** (In class, week of Dec 2)  
   Your final presentation should summarize your work to your classmates. The instructor(s) and other students will contribute to the evaluation of the final presentations. The date and schedule of the final presentations will be announced later.

### Workflow
1. Create a branch from dev
2. make your changes on your branch
3. push your changes to dev
4. resolve conflicts
5. delete your branch and repeat steps 1-5

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


