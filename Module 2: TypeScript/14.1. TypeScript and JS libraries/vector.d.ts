declare class Vector
{
    readonly x: number;
    readonly y: number;
    private length: number;
    private angle: number;

    public add(vector: Vector): Vector;
    public sub(vector: Vector): Vector;
    public negate(vector: Vector): Vector;
    public dot(vector: Vector): number;

    public static zero: Vector;
    public static up: Vector;
    public static down: Vector;
    public static left: Vector;
    public static right: Vector;

    public static equals(a: Vector, b: Vector): boolean;
    public static isVector(obj: Vector): boolean;
}
