# Web Development Project 7 - *Classmate Creator*

Submitted by: Matthew Chavez Cruz

This web app allows the user to create new classmates by naming them and assigning them a student archetype! You can see
all your classmates in the classroom where you will a summary of the class and a statistic based on who's there! From the
classroom you are able to find out more details about each classmate by clicking on them, from the details page you are able to go to an editor which lets you delete or update your existing classmate. Have fun building your classroom!

Time spent: 12 hours spent in total

## Required Features

The following **required** functionality is completed:


- [X] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values
- [X] **The web app includes a summary page of all the user’s added crewmatese**
  -  The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  -  The summary page is sorted by creation date such that the most recently created crewmates appear at the top
- [X] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [X] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate should no longer be visible in the summary page
  - [X] **Each crewmate has a direct, unique URL link to an info page about them**
    - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
    - The detail page contains extra information about the crewmate not included in the summary page
    - Users can navigate to to the edit form from the detail page

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attribute value options
  - e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
  - User can choose a `category` option to describe their crewmate before any attributes are specified
  - Based on the category value, users are allowed to access only a subset of the possible attributes
- [X] A section of the summary page, displays summary statistics about a user’s crew on their crew page
  - e.g., the percent of members with a certain attribute 
- [X] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
  - e.g., a pirate crew’s predicted success at commandeering a new galley
  - (My summary page describes how the classroom energy might be based on the classmate list!)


The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!
* [X] You are able to navigate back and forth from any page, even the editor!
* [X] The summary and stats take into account when there's no available data to use
* [X] The buttons change when hovering to easily tell where your cursor is placed
* [X] The buttons react when being clicked on so the user can tell if they successful created or updated a classmate
* [X] The archetype buttons light up when fully selected so the user knows what archetype they are going to be creating/updating

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Classmates - MattChCr.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  [ScreenToGif](https://www.screentogif.com/) for Windows


## Notes

I had some challenges implementing supabase into my code but once I got the hang of it, it was a lot easier
to navigate. There were some issues with the paths to images but I ended up importing them whenever they were used in order for them to work in all webpages.

## License

    Copyright [2025] [Matthew Chavez Cruz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.