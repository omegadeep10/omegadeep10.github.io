---
layout: blog

tags:
- Kustom

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

Overlap groups are nothing more than fancy containers for other objects. They can hold pretty much any module, including other overlap groups and stack groups. They automatically resize to wrap around all modules inside it. This behavior can sometimes get in the way however. Since the automatically resize, it can become difficult to keep modules aligned correctly the way you want it. Consider the video below, where I have an overlap group with 3 text modules.

![Overlap Group Positioning Issue Vid](link)

I added a shape that changed the size of the overlap group. I want to keep the text modules aligned to the left edge of the overlap group, but they remain centered in the group. Kustom provides a built-in method for modifying this behavior so we can get those text modules aligned like we want them:

![Overlap Group Anchor demonstration](link)

Ta-da. Every module (including overlap and stack groups) has a anchor property that can be modified to change how the module is positioned relative to its container. In the example above, the text modules aligned themselves relative to the overlap group since that was their container. If I had modified the anchor property of a module in the root layer, it would align itself relative to the screen. Anchors and padding are the primary way to change the position of a module.

 Overlap groups also have a couple other handy features. You can scale all items in an overlap group at once simply using the layer -> scale property. You can also repeat/tile modules in an overlap group and animate all items inside an overlap group at once. This is also the downside of overlap groups. You cannot apply animations to any object that is not in the root layer, so by grouping objects together in an overlap group, you lose the ability to animate those objects individually.


### Stack Groups

