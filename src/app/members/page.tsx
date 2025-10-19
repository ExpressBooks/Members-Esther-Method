"use client";

import { signOut } from "firebase/auth";
import { BookOpen, LogOut, Star, Expand, Minimize, Mail } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader as DialogHeaderPrimitive,
  DialogTitle,
  DialogDescription as DialogDescriptionPrimitive,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { auth } from "@/lib/firebase";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function MembersPage() {
  const router = useRouter();
  const { user } = useAuth();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // The AuthProvider will handle the redirect
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleFullscreen = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  const toggleFullscreenBonus = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Welcome | Esther Method</title>
      </Head>
      <div className="min-h-screen">
        <header className="flex items-center justify-between border-b bg-card/80 backdrop-blur-sm p-4 shadow-sm sticky top-0 z-10">
          <h1 className="font-headline text-xl font-bold text-primary md:text-2xl">
            Esther Method
          </h1>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user?.email}
            </span>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>

        <main className="container mx-auto p-4 py-8 md:p-8">
          <div className="mb-8 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-white md:text-4xl">
              Welcome, Woman of God!
            </h1>
            <p className="mt-2 text-lg text-gray-200">
              Explore the exclusive content we have prepared for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card/90 backdrop-blur-md overflow-hidden">
               <CardHeader className="p-0">
                <Image src="https://i.imgur.com/90KF0D8.png" alt="Esther Method" width={500} height={300} className="w-full h-auto object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                 <CardTitle className="font-headline text-2xl text-foreground mb-2">
                  Esther Method
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  Dive into the teachings and transform your journey. This is your main guide to a life with more purpose and faith.
                </CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Access here</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[80vw] h-[80vh] flex flex-col">
                    <DialogHeaderPrimitive className="flex-row items-center justify-between">
                      <div>
                        <DialogTitle>The Esther Method</DialogTitle>
                        <DialogDescriptionPrimitive>
                          Your guide to a life with more purpose and faith.
                        </DialogDescriptionPrimitive>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleFullscreen}
                        aria-label="Fullscreen"
                      >
                        {isFullscreen ? (
                          <Minimize className="h-5 w-5" />
                        ) : (
                          <Expand className="h-5 w-5" />
                        )}
                      </Button>
                    </DialogHeaderPrimitive>
                    <ScrollArea className="flex-grow h-full">
                      <iframe
                        ref={iframeRef}
                        src="/MetodoEsther.html"
                        width="100%"
                        height="100%"
                        style={{ border: "none", minHeight: "70vh" }}
                        title="Esther Method"
                        allowFullScreen
                      />
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card/90 backdrop-blur-md overflow-hidden">
              <CardHeader className="p-0">
                 <Image src="https://i.imgur.com/wVvh788.png" alt="Sermon Preparation Guide" width={500} height={300} className="w-full h-auto object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-foreground mb-2">
                  Sermon Preparation Guide
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  A practical and spiritual resource that guides you step by step to structure clear, powerful, and anointed sermons, avoiding blocks and gaining confidence with every speech.
                </CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Access here</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[80vw] h-[80vh] flex flex-col">
                    <DialogHeaderPrimitive className="flex-row items-center justify-between">
                      <div>
                        <DialogTitle>Sermon Preparation Guide</DialogTitle>
                        <DialogDescriptionPrimitive>
                          Additional material to deepen your ministerial preparation.
                        </DialogDescriptionPrimitive>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleFullscreenBonus}
                        aria-label="Fullscreen"
                      >
                        {isFullscreen ? (
                          <Minimize className="h-5 w-5" />
                        ) : (
                          <Expand className="h-5 w-5" />
                        )}
                      </Button>
                    </DialogHeaderPrimitive>
                    <ScrollArea className="flex-grow h-full">
                      <iframe
                        ref={iframeRef}
                        src="/GPSermones.html"
                        width="100%"
                        height="100%"
                        style={{ border: "none", minHeight: "70vh" }}
                        title="Sermon Preparation Guide.html"
                        allowFullScreen
                      />
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card/90 backdrop-blur-md overflow-hidden">
                <CardHeader className="p-0">
                  <Image src="https://i.imgur.com/g1X7tFt.png" alt="The 7 Steps Inspired by Esther" width={500} height={300} className="w-full h-auto object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-foreground mb-2">
                  The 7 Steps Inspired by Esther
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  A quick list with the 7 steps inspired by Esther that prepares you minutes before preaching, helping you calm your nerves, focus your mind, and step up to the pulpit with divine authority.
                </CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Access here</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[80vw] h-[80vh] flex flex-col">
                    <DialogHeaderPrimitive className="flex-row items-center justify-between">
                      <div>
                        <DialogTitle>The 7 Steps Inspired by Esther</DialogTitle>
                        <DialogDescriptionPrimitive>
                          The 7 steps of Esther to take the pulpit with peace and authority.
                        </DialogDescriptionPrimitive>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleFullscreenBonus}
                        aria-label="Fullscreen"
                      >
                        {isFullscreen ? (
                          <Minimize className="h-5 w-5" />
                        ) : (
                          <Expand className="h-5 w-5" />
                        )}
                      </Button>
                    </DialogHeaderPrimitive>
                    <ScrollArea className="flex-grow h-full">
                      <iframe
                        ref={iframeRef}
                        src="/Los7Pasos.html"
                        width="100%"
                        height="100%"
                        style={{ border: "none", minHeight: "70vh" }}
                        title="The 7 Steps Inspired by Esther"
                        allowFullScreen
                      />
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
            
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card/90 backdrop-blur-md overflow-hidden">
              <CardHeader className="p-0">
                  <Image src="https://i.imgur.com/r82Athv.png" alt="Ministerial Leadership Development Plan" width={500} height={300} className="w-full h-auto object-cover" data-ai-hint="leadership book" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-foreground mb-2">
                  Ministerial Leadership Development Plan
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  A strategic plan to cultivate and strengthen your leadership skills within the ministry, guiding you to become an influential and effective leader.
                </CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Access here</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[80vw] h-[80vh] flex flex-col">
                    <DialogHeaderPrimitive className="flex-row items-center justify-between">
                      <div>
                        <DialogTitle>Ministerial Leadership Development Plan</DialogTitle>
                        <DialogDescriptionPrimitive>
                          Strengthen your leadership skills in ministry.
                        </DialogDescriptionPrimitive>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleFullscreenBonus}
                        aria-label="Fullscreen"
                      >
                        {isFullscreen ? (
                          <Minimize className="h-5 w-5" />
                        ) : (
                          <Expand className="h-5 w-5" />
                        )}
                      </Button>
                    </DialogHeaderPrimitive>
                    <ScrollArea className="flex-grow h-full">
                      <iframe
                        ref={iframeRef}
                        src="/Plan de Desarrollo.html"
                        width="100%"
                        height="100%"
                        style={{ border: "none", minHeight: "70vh" }}
                        title="Plan de Desarrollo"
                        allowFullScreen
                      />
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Alert className="bg-card/80 backdrop-blur-md border-border/50 text-foreground">
              <AlertTitle className="flex items-center gap-2 font-bold text-base">📢 Important:</AlertTitle>
              <AlertDescription className="text-sm">
                <p className="mt-2">
                  If you encounter any technical issues or difficulties accessing or using the course content, please let us know immediately. Our support team is ready to help you and resolve your situation as quickly as possible.
                </p>
                <p className="mt-4 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <strong className="text-foreground">Support:</strong>
                  <a href="mailto:apoyo@infodigitalexpress.shop" className="text-foreground hover:underline">
                  support@infodigitalexpress.shop
                  </a>
                </p>
                <p className="mt-4">
                  Your satisfaction and experience are our priority. 💜
                </p>
              </AlertDescription>
            </Alert>
          </div>
        </main>
      </div>
    </>
  );
}
