const { headings, directions } = require("./constants");

class Robot {
  // Constructor with some sensible default values
  constructor(x = 0, y = 0, heading = headings.NORTH) {
    this.x = x;
    this.y = y;
    this.heading = heading;
  }

  // Update the robot's (x,y) coordinates based on the cardinal heading
  move() {
    switch (this.heading) {
      case headings.NORTH:
        this.y++;
        break;
      case headings.SOUTH:
        this.y--;
        break;
      case headings.EAST:
        this.x++;
        break;
      case headings.WEST:
        this.x--;
        break;
      default:
        break;
    }
  }

  // Change the heading to the left of the current heading
  turnLeft() {
    this.heading = this._turn(directions.LEFT);
  }

  // Change the heading to the right of the current heading
  turnRight() {
    this.heading = this._turn(directions.RIGHT);
  }

  // Private

  // Return the current position of the robot
  position() {
    return `Robot is at (${this.x}, ${this.y}), facing: ${this.heading}`;
  }

  // Determine the cardinal heading based on the relative direction
  _turn(direction) {
    switch (this.heading) {
      case headings.NORTH:
        return direction === directions.LEFT ? headings.WEST : headings.EAST;
      case headings.WEST:
        return direction === directions.LEFT ? headings.SOUTH : headings.NORTH;
      case headings.SOUTH:
        return direction === directions.LEFT ? headings.EAST : headings.WEST;
      case headings.EAST:
        return direction === directions.LEFT ? headings.NORTH : headings.SOUTH;
      default:
        return;
    }
  }
}

module.exports = Robot;
