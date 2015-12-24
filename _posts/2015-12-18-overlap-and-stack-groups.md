---
layout: blog

tags: Kustom
comments: true

header-title: Kustom Overlap and Stack Groups explained.
header-subtitle: December 18, 2015 in Kustom

links:
  - title: Home
    url: "http://omegadeep10.github.io"
  - title: Contact
    url: "#contact"
---

## Introduction to Kustom Groups

If you have used Kustom before, I'm sure you've run into a situation where the root layer contains a huge list of modules. This makes it difficult to modify your theme because of module clutter. This is where groups come to the rescue. Overlap and Stack groups are special modules in Kustom that can contain other modules. By themselves, they don't do anything special, but they are containers for other objects, which becomes very useful for a variety of reasons:

- <p class="bold">Organization</p> Kustom groups do exactly what you'd expect; they allow you to group together other modules into logical sections. This comes in handy later when you are trying to find that one shape.
- <p class="bold">Performance</p> Modules in the root layer actually take up more resources than modules within a group. By optimizing the root layer, you can improve the performance of your wallpaper, especially for complex wallpapers.
- <p class="bold">Future Customization</p> By keeping your root layer clean and logically organized, you make it easy for yourself when you want to change something later. This also makes it easy for other people to customize your theme, which is very important if you plan on sharing it.

### Overlap Groups

Overlap groups are nothing more than fancy containers for other objects. They can hold pretty much any module, including other overlap groups and stack groups. They automatically resize to wrap around all modules inside it. This behavior can sometimes get in the way however. Since the automatically resize, it can become difficult to keep modules aligned correctly the way you want it. Consider the situation below, where I have an overlap group with 3 text modules.

<img data-src="http://i.imgur.com/JGwM0Nu.gif" alt="positioning issue" class="col-1 lazyload">

I added a shape that changed the size of the overlap group. I want to keep the text modules aligned to the left edge of the overlap group, but they remain centered in the group. Kustom provides a built-in method for modifying this behavior so we can get those text modules aligned like we want them:

<img data-src="http://i.imgur.com/twurF4D.gif" alt="anchor demonstration" class="col-1 lazyload">

Ta-da. Every module (including overlap and stack groups) has a anchor property that can be modified to change how the module is positioned relative to its container. In the example above, the text modules aligned themselves relative to the overlap group since that was their container. If I had modified the anchor property of a module in the root layer, it would align itself relative to the screen. Anchors and padding are the primary way to change the position of a module.

 Overlap groups also have a couple other handy features. You can scale all items in an overlap group at once simply using the layer -> scale property. You can also repeat/tile modules in an overlap group and animate all items inside an overlap group at once. This is also the downside of overlap groups. You can also add multiple shapes to an overlap group, set one shape to clip all, and it will clip all shapes inside the group, without affecting shapes outside the group. 

### Stack Groups

 Stack groups are also containers for other objects, much like overlap groups. However, unlike overlap groups, stack groups will automatically "stack" the modules inside it, one on top of another. Overlap groups perform no such function and multiple modules inside an overlap group will cover each other up. For example, look at what happens when we place some modules inside a stack group.

<img data-src="http://i.imgur.com/zhqYqYN.gif" alt="stack demonstration" class="col-1 lazyload">


 If you had done that within an overlap group, you'd have to add padding and change the anchor of each module individually. Stack groups provide an easy way to position items in a stack arrangement. They are very useful in many different scenarios:

* <p class="bold">Dyanamic Item Size</p> If you know the size of your modules might change, it is probably a good idea place your modules inside a stack group so they won't overlap each other if their size does change.
* <p class="bold">Add/Remove Items Easily</p> Recently, I got asked on /r/androidthemes to modify my material theme and add more agenda items to the calendar. This would have been difficult had I not used a stack group. As you can see below, adding more agenda items is a simple matter of copy/pasting previous agenda items. The stack group automatically stacks them correctly. <img data-src="http://i.imgur.com/jLBwlv2.gif" alt="material calendar" class="col-1 lazyload">
* <p class="bold">Customizable Item Size</p> A fun technique made possible by stack groups is shown below. This works by adding text modules to a stack group that all have their bottom padding set to a global variable. Then, by manipulating the global variable, you can change how much space is in between each item easily. I've used this in my <a href="/portfolio-pages/disc" alt="Disc Theme Design">Disc Theme</a> to create a customizable app launcher. <img data-src="http://i.imgur.com/h1RZHLg.gif" alt="Disc app launcher" class="col-1 lazyload">


### Conclusion

Overlap Groups and Stack Groups containers for other modules that allow you to manage your theme more easily. They have a variety of features and options that are very powerful and important for making complex layouts. However, they also have some limitations. The most important limitation to keep in mind is that any modules not located in the root layer cannot be animated. This means modules within a group cannot be animated individually. Other than that, you're good to go!
