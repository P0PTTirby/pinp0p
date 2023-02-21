basic.show_leds("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . . # . .
        . # # # .
        . # # . .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . . # . .
        . # # # .
        . # # # .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . # # . .
        . # # # .
        . # # # .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
""")
basic.show_leds("""
    . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
""")
basic.show_leds("""
    . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
""")
basic.show_leds("""
    . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
""")
basic.show_leds("""
    . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
""")
basic.show_leds("""
    . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
""")
basic.show_leds("""
    # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
""")
basic.show_leds("""
    . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
""")
basic.show_leds("""
    . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
""")

def on_forever():
    led.plot_brightness(2, 0, 270)
    led.plot_brightness(2, 1, 270)
    led.plot_brightness(2, 2, 270)
    led.plot_brightness(1, 2, 70)
    led.plot_brightness(3, 2, 70)
    led.plot_brightness(1, 3, 70)
    led.plot_brightness(3, 3, 70)
    led.plot_brightness(2, 4, 70)
    for index in range(1):
        led.plot_brightness(1, 1, 270)
        led.plot_brightness(3, 1, 270)
    basic.pause(500)
    for index2 in range(1):
        led.plot_brightness(1, 1, 0)
        led.plot_brightness(3, 1, 0)
    basic.pause(500)
basic.forever(on_forever)
