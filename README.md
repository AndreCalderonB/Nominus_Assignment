# Before Running:
Run **npm install** before running, because the **node_modules** folder isn´t included in the zip.

# Assumptions: 
- Answer box grows with text
- The component would need to be reused, so texts and words are passed by props.

# Features: 
- You can set other excercises on the **<Story />** component, **line 55**, by changing the "solution" prop.
- Solutions are automatically separated and scrambled.
- Answers are colored green if correct, and red if incorrect.

# Libraries Used:
- Bootstrap CSS.

# Tests: 

-Renders Excercise:

- Checks if Excercise component renders correctly.

-Excercise Button Test:

- Checks if buttons modify answer.

-Practice Title & Episode Render Correctly:

- Creates Story Component with Title and Episode props.

- Checks if texts correspond to given values.
