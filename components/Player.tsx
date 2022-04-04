import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const Player = ({ song }) => {
  const [sound, setSound] = useState(null);

  const onPlayBackStatus = (status) => {
    console.log(status);
  };
  useEffect(() => {
    const playCurrentSong = async () => {
      Audio.Sound.createAsync(
        {
          uri: "https://tinderphotos1122.s3.ap-south-1.amazonaws.com/starfrosch%20-%20I%27m%20Trapped%20Here.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEAkgjliuC6SiiRnBYjD42jWDkQpUBGycW7v0UhdlA%2BT6oCIHf3EjCvbnvwh5kxlYCw5n9XtStyRc4SmhTtMm5nlUKzKuQCCHYQABoMMDgxNTQyNjExMjEzIgzJfqLsU3d7kDs4tcQqwQImcjxZMfJprFqxuZ2oEhDDL8d%2FCjWx4MBhaacKUeS7XuLOV9sxLi%2BWCFrI1mY76sYzoAxsB8rJuS3ODyGgLZTbOzN%2B0rfp%2ForYyBOUZhFzo8dDpoSP4uWGxZpOOtz4g7mVbQlbD1ZLL1YjbqgDyWlGixksfBFv4EmphSH81vcQsKaVZzTDfnmkOnhrimT0CkHAlOXkKBujt8xFFWGx3WwfEoo5vCdWUVqWe6kI2M1FYKDCBzqooHe31BIRt02gDvtan9kJ%2B%2FFWSMuSbI9nxA7zRKNXmhCN7rmByXDC9N11SDzjD7lLoRUILhkfp3uGwc7PypVuOyYMt3u68WG5Mo1AEYPjfiSlrgzotXPpg1BYt0naDB9fLIy87iHlRxqv7JxUaM4sROYHXMitF7wuX7%2BknuSftLhYIZxkyS4YnPCdZtQwwtCrkgY6swIxznzbsalSZg8jzyQ97IqpS01is8W4YDA3RMV4CnEi2Gws%2FAxtExagvn7vxbLR2X7HaU5WBgEuBHvm%2Fzlpuv%2FVEMS9wHVe2ZGKPiW9INKW1yn8I5JmvH6EhpXh%2F5INqPOOrn9WijxOikuJuEX9In%2FbgK3pDJu6SKyv2BUL38yfUizTUlYTAFc5fpZdJ8Lua6aomeBp4dKlZQ2j793t0wvA9QqCuhJmPi7T%2FNF3qbEFyBPK3mAhZLwJllR%2BA%2BDeZK03oUWfnSdqrjeN27eZK1KPE1mukdftxv1EyYarhr5YxLddXfBUH7vtK6U5URcSviXT98GQn8Raisr6T%2FElh4IBVnBeVGFLQqy7Wq4ktMw%2FFTKn2FBzjVx3L6GTOMeUncIsUEhvU476BBCT9jhypraNW2SR&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220404T125652Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIARF7CRQEG3SYNUTAY%2F20220404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=53d905425ef2ac791db276bf4089ed1c7fd428d2017a1834cd1f018b4789d7f0",
        },
        { shouldPlay: true },
        onPlayBackStatus
      );
    };
    playCurrentSong();
  }, [sound]);
  return (
    <View>
      <AntDesign name="play" onPress={} size={25} />
    </View>
  );
};

export default Player;
