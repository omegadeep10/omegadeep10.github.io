---
layout: blog

tags: Android Theming
comments: true

header-title: Making Custom Progress Bars in KLWP.
header-subtitle: December 25, 2015 in Android Theming

links:
  - title: Home
    url: "http://omegadeep10.github.io"
  - title: Contact
    url: "#contact"
---

## Progress Bar Presets
Kustom provides a variety of presets when it comes to creating progress bars. However, us themers often want to create our very own progress bars for things like RAM/CPU usage, weather, network signal, etc. In this tutorial, I'll show you how to create your very own customized progress bars for your theme. I'll also talk about the limitations of progress bars and ways to get around those issues.

### CPU Progress Bar
To create a simple custom progress bar, all we have to do is add a progress bar, set the preset to custom, and then set the level to a formula like shown below. In the formula field, you must enter a formula that gives a number between 1 and 100. Since we're creating a CPU progress bar, we'll set the formula to `$rm(cidle)$`.

<img data-src="http://i.imgur.com/SWfKV0h.gif" alt="CPU progress bar" class="col-1 lazyload">

### RAM Progress Bar
The RAM progress bar is a bit more complicated that the CPU progress bar. Remember we need a number between 1 to 100 for the progress bar to work properly. Kustom gave us the CPU usage in percent form, so all we needed to do is plug it into the formula field. In this case, Kustom gives us the used and free ram in megabytes, so we'll need to convert it into percentage form ourselves. The math is simple: all you need to do is divided used ram by total ram and then multiply by 100, so this: `$rm(mused)/rm(mtot)*100$`.

<img data-src="http://i.imgur.com/3VvlUec.gif" alt="RAM Progress bar" class="col-1 lazyload">

Notice that in some cases, we need to convert the data into a percent form ourselves before we input it into the formula field. Other than that, making custom progess bars is very simple. You can pretty much follow the same instructions for making weather, network signal, and other types of progress bars.

## Alternative Progress Bars
Progress bars are great, but they aren't as flexible as regular shapes when it comes to style options. There is no clipping, shadows or drawing modes available for progress bars. However, it's possible to make progress bars out of simple shapes like rectangles and circles, so you can still have your customization options. Here, we'll recreate the RAM and CPU progress bars from above, but using only simple shapes.

### CPU Progress Bar
For the CPU progress bar, we'll first create a simple rectangle shape. Now, we resize it to how big we want the final progress bar to be. In this case, I want a progress bar to be a maximum of 300 units wide and 20 units tall:

<img data-src="http://i.imgur.com/ju1bgyb.gif" alt="Rectangle setup" class="col-1 lazyload">

Now, we set the width to a formula. Previously, we didn't have to convert CPU to a number between 1-100 because Kustom already gave us a number in that range. However, in this case, we'll need to convert it to percentage of 300 because our progress bar is 300 units wide. If we just entered the formula, the maximum value possible would be 100, which is only 1/3 of our progress bar. To do this, we simply divide used CPU by maximum CPU value and multiply by 300: `$rm(cidle)/100*300`. This is a important to understand: when making custom progress bars out of basic shapes, the formula is directly affected by the total size of your shape.

<img data-src="http://i.imgur.com/OwuRXGx.gif" alt="rectangle formula" class="col-1 lazyload">

### RAM Progress Bar

For this one, I'm going to do something a little different and create a circular progress bar. I also want a background color for the shape as well. We'll do that by creating two shapes: one circle slice will be the actual progress bar, and a copy of that circle slice will be the background:

<img data-src="http://i.imgur.com/sf9tI09.gif" alt="Circle slice setup" class="col-1 lazyload">

Since we created a circle slice, the "progress" of our progress bar will be controlled by the angle of the circle slice instead of the height or width. Therefore, we need to set the angle to a formula. The maximum angle value is 360, our RAM will need to be a percentage of 360 like so: `$rm(mused)/rm(mtot)*360$`.

<img data-src="http://i.imgur.com/jwWBS29.gif" alt="Circle slice angle formula" class="col-1 lazyload">

##Conclusion

It's super easy to create your very own custom progress bars that display progress from whatever values you please. Unfortunately, Kustom's built in progress bar modules don't have the advanced customization options of other modules. However, it's possible to create a progress bar out of simple shapes, so you can still have your shadows, clipping, and drawing modes.