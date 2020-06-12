const Robot = require("./robot");

describe("Robot Class Tests", () => {
  test("Class is defined", () => {
    expect(Robot).toBeDefined();
  });

  test("Default coordinates for the Robot", () => {
    const robot = new Robot();

    const actual = robot.position();
    const expected = "Robot is at (0, 0), facing: North";

    expect(actual).toBe(expected);
  });

  test("Move Robot from the default position", () => {
    const robot = new Robot();
    robot.move();
    robot.move();

    const actual = robot.position();
    const expected = "Robot is at (0, 2), facing: North";

    expect(actual).toBe(expected);
  });

  test("Turn Robot left, and move twice from the default position", () => {
    const robot = new Robot();
    robot.turnLeft();
    robot.move();
    robot.move();

    const actual = robot.position();
    const expected = "Robot is at (-2, 0), facing: West";

    expect(actual).toBe(expected);
  });

  test("Turn Robot right, move twice from the default position, and turn right three times", () => {
    const robot = new Robot();
    robot.turnRight();
    robot.move();
    robot.move();
    robot.turnRight();
    robot.turnRight();
    robot.turnRight();

    const actual = robot.position();
    const expected = "Robot is at (2, 0), facing: North";

    expect(actual).toBe(expected);
  });
});
