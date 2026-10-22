# Liljans Blommor - Owners Guide

## How to change information about your products

## Step one, Go to [github](https://github.com/NTIG-Uppsala/Liljans-Blommor-Dev/tree/Nextjs-dev/my-app/data)
You should now see this screen

## Step two, Go go the file you want to edit
Their are 4 files containing the information displayed on the webbsite

**Contacts.json** contains the phone number and the email adress displayed on the webbsite.

**openingHours.json** contains the hours of the day where your shop is open

**postalCodes.json** contains the postal codes where you can deliver flowers

**products.json** contains the products you curently display on your webbsite

To open a file press the name of the file you want to open

## 3. Step three, Changing information

### Tips

Before chainging anything we recomend you to take a picture (or a screeanshot) of the contence of the file so you can remember how the information is formated.

When making changes to the information, remmember to always keep the format the same. This means that all the special charecters like quotation marks  ""  or commas  , need to be keept the same or the webbsite might not display the information correctly.

### Example: Changing contact information

After pressing the **Contacts.json** file you should see somting like this
```
{
    "tel": "+465553571114",
    "mail": "lilja.notreal@notreal.se",
    "address": "Kurravaaravägen 4",
    "postalCode": "981 37",
    "city": "Kiruna"
}
```

You should never change the words on the left hand side like the "tel" or "mail", but you can change the right side information inside the quotation marks.
Remember, you need to keep the quotation marks. 

Press the pencil icon on the right side of the page, if you hover over it it should say "Edit this file". Now you are in the editing view and can start making changes to the file

You can now for example change the phone number from "+465553571114" to "+465555555555"

After you are done editing the file press the **Commit changes...** button at the top right of the screean. This will open a popup window.

At the top of the popup it shoud say "Commit message". In the text box below you can you type in a message, for example what changes you made.

Then you can press the **Commit changes button** and the information is now upptdated. But we are not done yet.


## 4. Apply changes to the website

Press the windows key and type "Terminal" and press enter on your keyboard, this should open a black box that you can type in. 

Now enter the command below
```
ssh root@ntig.dev -p 62103
```





