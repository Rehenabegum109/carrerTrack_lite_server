import { Request, Response } from "express";
import { loginUser, registerUser, getMe as getMeService,} from "./auth.service";

export const register = async (
  req: Request,
  res: Response
) => {
  try {

    const result = await registerUser(req.body);


    res.cookie(
      "accessToken",
      result.accessToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      }
    );


    res.status(201).json({

      success: true,

      message: "User registered successfully",

      data: result.user,

    });


  } catch(error:any){

    res.status(400).json({

      success:false,

      message:error.message,

    });

  }
};


export const login = async (req : Request, res: Response) => {
  try {
    const result = await loginUser(req.body);

   res.cookie("accessToken", result.accessToken, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
console.log(res.getHeaders());
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result.user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



export const getMe = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await getMeService(user.id);
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (
  req: Request,
  res: Response
) => {

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });


  res.status(200).json({

    success: true,

    message: "Logout successful",

  });

};