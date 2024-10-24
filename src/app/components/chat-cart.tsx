import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";

export default function ChatCard(
    {user, message, time, reply}: { user: string, message: string, time: string, reply: Function }
) {
    return (
        <Card className="w-full">
            <CardBody className="p-0">
                <div className="flex">
                    {/*Use infor*/}
                    <div className="w-48 p-4 flex flex-col items-center border-r">
                        <Avatar
                            className="h-20 w-20"
                            src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
                        <h2 className="mt-2 text-lg font-semibold text-orange-500">{user}</h2>
                        <p className="text-sm text-gray-500">Member</p>
                    </div>
                    <div className="flex-1 p-4">
                        <div className="flex justify-between items-center mb-4">
                            {/*Time*/}
                            <span className="text-sm text-gray-500">{time}</span>

                            {/*Message index*/}
                            <div className="flex items-center space-x-2">
                                {/*<Share2 className="w-4 h-4 text-gray-400" />*/}
                                <span className="text-sm text-gray-500">#4</span>
                            </div>
                        </div>

                        {/*Message*/}
                        <div className="flex items-center space-x-2 mb-4">
                            {/*<Medal className="w-5 h-5 text-yellow-400" />*/}
                            <span className="text-sm font-medium">{message}</span>
                        </div>

                        {/*React*/}
                        <div className="border-t pt-2">
                            <div className="inline-flex items-center space-x-1 rounded px-2 py-1">
                                <span className="text-yellow-500 text-lg">😊</span>
                                <span className="text-sm">Resius</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
            <CardFooter className={"justify-end space-x-4"}>
                {/*    Report*/}
                <Button size={"sm"} className="text-red-500">Report</Button>
                {/*    Reply*/}
                <Button size={"sm"} className="text-blue-500"
                        onClick={() => reply(user)}
                >Reply</Button>
            </CardFooter>
        </Card>
    )
}