"use client";

import {SearchIcon} from "@nextui-org/shared-icons";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";
import {Chip} from "@nextui-org/chip";
import ChatCard from "@/app/components/chat-cart";
import {Input} from "@nextui-org/input";
import {useState} from "react";
import {Spacer} from "@nextui-org/react";


let comment = [
    {
        user: "Phun Nam",
        message: "Zine do phan boi",
        time: "Feb 16, 2024"
    },
    {
        user: "Zine Chicken",
        message: "Di nvqs thui",
        time: "Feb 16, 2024"
    },
    {
        user: "A Hai",
        message: "Full stack developer",
        time: "Feb 16, 2024"
    },
    {
        user: "NYC",
        message: "Zine tran la do toi",
        time: "Feb 16, 2024"
    }, {
        user: "T1 Gumayusi",
        message: "Tôi sẽ bán mình cho GenG",
        time: "Feb 16, 2024"
    },
]

export default function Home() {
    const [isReply, setIsReply] = useState(false);

    // List comment
    const [listcomment, setComment] = useState(comment);

    // Reply to
    const [replyTo, setReplyTo] = useState("");

    // Comment text
    const [commentText, setCommentText] = useState("");

    //function
    const reply = (user: string) => {
        setIsReply(true);
        setReplyTo(user);
    }


    return (
        <div className={`min-h-screen dark`}>
            <div
                className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 min-h-screen p-4 md:p-6">
                <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <header className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Zine der</h1>
                            {/*<div className="relative">*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Find topic or post"*/}
                            {/*        className="pl-8 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"*/}
                            {/*    />*/}
                            {/*    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"/>*/}
                            {/*</div>*/}
                            <Input
                                startContent={<SearchIcon className=""/>}
                                placeholder="Find topic or post"
                                className="w-72"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                                className="h-10 w-10"
                            />
                        </div>
                    </header>
                    <main className="flex">
                        <div className="flex-grow p-4">
                            <div className="space-y-4">
                                {listcomment.map((item, index) => (
                                    <ChatCard reply={reply} key={index} user={item.user} message={item.message}
                                              time={item.time}/>
                                ))}
                            </div>

                            {/*Comment bar*/}
                            <div className={"w-full mt-10"}>
                                <Card className="">
                                    <CardHeader>
                                        {isReply ? (
                                            <div
                                                className="flex items-center justify-between p-2 mb-2 rounded-md bg-muted">
                                                <div className="flex items-center space-x-2">
                                                    <Avatar className="w-6 h-6">

                                                    </Avatar>
                                                    <span className="text-sm text-muted-foreground">Replying to</span>
                                                    <span className="text-sm font-medium">{replyTo}</span>
                                                </div>
                                                <Spacer x={2}/>
                                                <Button variant="ghost"
                                                        isIconOnly={true}
                                                        className="h-6 w-6"
                                                        onClick={() => setIsReply(false)}
                                                >
                                                    X
                                                </Button>
                                            </div>
                                        ) : (
                                            <></>
                                        )}


                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex items-center space-x-4">
                                            <Avatar
                                                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                                                className="h-10 w-10"
                                            />
                                            <Input
                                                placeholder="Add a comment"
                                                className="flex-grow"
                                                onValueChange={(value) => setCommentText(value)}
                                                endContent={
                                                    <Button
                                                        onClick={() => {
                                                            setComment([...listcomment, {
                                                                user: "You",
                                                                message: commentText,
                                                                time: "Feb 16, 2024"
                                                            }])
                                                            //     clear
                                                        }
                                                        }
                                                    >
                                                        Send
                                                    </Button>
                                                }
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>


                        <aside className="w-80 border-l dark:border-gray-700 p-4 hidden lg:block">
                            <div className="flex h-full  w-full items-start justify-center overflow-scroll">
                                <Card className="my-10 w-[400px]">
                                    <CardHeader
                                        className="relative flex h-[100px] flex-col justify-end overflow-visible bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
                                        <Avatar
                                            className="h-20 w-20 translate-y-12"
                                            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                                        />
                                        <Button
                                            className="absolute right-3 top-3 bg-white/20 dark:bg-black/20"
                                            radius="full"
                                            size="sm"
                                            variant="light"
                                        >
                                            Edit Profile
                                        </Button>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="pb-4 pt-6">
                                            <p className="text-large font-medium">Din trần</p>
                                            <p className="max-w-[90%] text-small ">@dinder</p>
                                            <div className="flex gap-2 pb-1 pt-2">
                                                <Chip variant="flat">Design</Chip>
                                                <Chip variant="flat">UI/UX</Chip>
                                                <Chip variant="flat">Photography</Chip>
                                            </div>
                                            <p className="py-2 text-small text-foreground">
                                                Làm khoá luận 2 lần vẫn chưa xong
                                            </p>
                                            <div className="flex gap-2">
                                                <p>
                                                    <span
                                                        className="text-small font-medium">999</span>&nbsp;
                                                    <span className="text-small text-default-400">Following</span>
                                                </p>
                                                <p>
                                                    <span
                                                        className="text-small font-medium">0</span>&nbsp;
                                                    <span className="text-small ">Followers</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/*<Tabs fullWidth>*/}
                                        {/*    <Tab key="posts" title="Posts"/>*/}
                                        {/*    <Tab key="likes" title="Likes"/>*/}
                                        {/*    <Tab key="comments" title="Media"/>*/}
                                        {/*</Tabs>*/}
                                    </CardBody>
                                </Card>
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
            <button
                className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg">
                {/*<PenSquare className="h-6 w-6"/>*/}
            </button>
        </div>
    );
}
