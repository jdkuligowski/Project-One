# Project-One
First GA SEI project - development of a Frogger game

<!-- EVERYTHING TO BE UPDATED, BUT THESE ARE MY THOUGHTS BY DAY -->

# Project One

**Day 1 reflections**

*What was a success?*

1. My plan is effective so far:
    1. I managed to get everything done I was hoping to
    2. I benefitted from thinking about the full design of the game at the start and prioritising the different features, as now i’m just delivering on those
2. I’m loving problem solving all day and seeing tangible results
3. It’s great to start to fuse html css and javascript together.  This project is brilliant for improving my understanding and ability to deploy javascript
4. 

*What was a challenge*

1. I had some issues with git and although I am pushing to the remote repo I’m not sure whether its configured in the best way
2. My images are slightly too tall for the cells - I need to find a way to get them to fit just within the borders. This could be an image issue rather than a html/css issue
3. I haven’t fully grasped being able to deploy loops - I know there’s an effective way to use this for applying a css style to multiple divs, but i’m getting the syntax slightly wrong. I’ve used a less ‘DRY’ solution for now and will come back to it.

**Day 2/ Weekend Reflections**

*What was a success?*

1. I’ve continued to make decent progress:
    1. getting all players to move across the board
    2. getting lives to decrease on collisions
    3. getting the score to increase with movement
    4. getting all animals to move across the board
    5. introducing sounds to the game
2. Its enjoyable to see things coming together

*What was a challenge?*

1. *I have two main issues at the moment:*
    1. a collision only happens if it coincides with the press of a key - i need to make it happen even if the character and the obstacle overlap each other without clicking
    2. I haven’t yet been able to move characters as an array - i can add them but not move them around together
    

**Day 3 - Monday Reflections**

*What was a success?*

1. I have managed to get all objects moving together as arrays
2. Images are sized correctly - very easy fix - used contain instead of cover as css style
3. I have a modal to overlay, introduce and start the game

*What was a challenge?*

1. My collisions aren’t working effectively - i don’t think the collision function isn’t correctly moving the position of the obstacles
2. I’ ve currently got the modal to load on click, but need to get it to appear on screen load
3. I’m not clear on the best way to position my modal in the html and how to present it most effectively in css.

**Day 4 - Tuesday Reflections**

*What was a success?*

1. It’s starting to feel more and more game-like, with most of the issues i’ve had being sorted out
2. I’m feeling more and more comfortable using Javascript - the focus on it for a few days has been extremely helpful
3. I managed to solve some issues by stripping my code back line by line and finding the root cause, which was very effective
4. I’ve managed to get modals working quite effectively, which i think gives the game a much better overall feel

*What was a challenge?*

1. My code is not DRY as it stands - i am still doing things in a convoluted way
2. It took me a lot longer than it should have done to solve my problem with the set intervals

**Day 5 - Wednesday Reflections**

*What was a succes?*

1. I’m pretty much there with the MVP of the game - all bugs seem to have been addressed and the game can won/ lost

*What was a challenge?*

1. I spent a long time trying to figure out some tiny issues with gameplay
2. The size of my code makes it harder to troubleshoot - it needs to be tidied up

**Day 6 - Thursday Reflections**

1. My debugging abilities are improving
2. 

**Overall reflections**

1. I’ve learn an awful lot over the course of the week, particularly with javascript - it was great to start to apply javascript and embed some of my understanding
2. It feels as though the html and css from the first week has sunk in quite well, i was able to  build those elements of the solution without much consultation from my notes, other than new material, such as modals.
3. I know there are a number of areas I can improve on my code, although I didn’t have as much time as I would have liked to refactor this. I’ll find some time to revisit this and improve on the final product.
4. I’ve had a lot of fun building the game
5. I would have liked to be able to create a leaderboard and experiments with local memory, something I think will be useful

What is still outstanding/ what i’d still like to do

1. I have still not managed to disable the keys when the characters lose a life - definitely an issue which I will resolve asap
2. I would like to make toggles for the sounds - I started this then deprioritised, so the css is there for this, but functionality doesn’t work
3. I would like to improve the scoring functionality - as it stands, it works, but it  isn’t effective, as you can score more points if you lose more lives
4. I’d like to increase the number of levels a player can complete
5. I’d like to add in high scores/ a leaderboard based on name inputs
