const keys = [
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
"DLNJDOJKKCY3HU9CEXQACAE5WF1ADAQ1HZX7JF4SV3SNXSZM0V6I2SKR8TK8KI1M3WLPH5VYU4RYI591FSKMOGK7W60CFQ0QU507HEJ3U4ATZXHYOGGNZNAW01Z1SRPFYD7GWX3HZWKGHBGQOCDPS9NDWYG7HDWY57LOHBXM4Q97XVKJVF8BA72X37XT1SIBHUZDI01C", 
"LINSMNUOM9ELDXZR78V8H81CX9JAPRZY1B936SE1EOZG47EUSDTH3PWNQ3WZ4ZIMN2HAWJ5MZWKCBPH8ERU4U50NY8245ZLTRWPKQXNOT6ZABHYED4EHN57E8MTUVXZ8VTDLQD5OSVBO6YGRFIWCTOWIO0VGGDSVHW7B5XD9IS9NBKXW8K1KNE531U3MI37B4RD2V7PB", 
"WEA6R1KWP5FSA0IJ6XCO09LSO0LJKRB5R2IUZ05CEKE70BHWZ0W3KZ6U09ZW2IFFO5O83NV8IGVI735SO9OXGN65AOBCNWT65RBY4KYUGIPAUV73HE7858GA7ZOHGKICRBCHWMU3EH1SQGCUGF7158T1Q1LXNC1NH55BJKLKWQV02GNWTSLTE5AOXYRKOBEKUX9M9NSF",
"",
""
];

function test(id)
{
	alert(getSelectedKeyPreview(id));

	return;
}

function getSelectedKeyPreview(keyID, target)
{
	var i;
	var strOut = "";
	for(i = 0; i < 70; i++)
	{
		strOut += keys[keyID].charAt(i);
		
		if (i != 0 && i % 5 == 4)
		{
			strOut += " ";
		}
	}
	
	strOut += "...";
	
	target.value = strOut;
	
	return true;
}


function getOTPOutput(keyID, mode, source, target)
{
	var i;
	var ai = 0;
	var ki = 0;
	var offset = 0;
	var in_char = "";
	var out_char = "";
	document.getElementById(target).value = "";
	document.getElementById(source).value = document.getElementById(source).value.toUpperCase();
	
	
	for(i = 0; i < document.getElementById(source).value.length; i++)
	{
		in_char = document.getElementById(source).value.charAt(i);
		ai = keys[0].indexOf(in_char);
		offset = keys[0].indexOf(keys[keyID].charAt(ki));
				
		if(ai == -1) // Not found, just send it out
		{
			out_char = in_char;
		}
		else
		{	
			if(mode == "D")
			{
				if(ai - offset < 0)
				{
					ai += 36;
				}
				out_char = keys[0].charAt(ai - offset);
				
			}
			
			if(mode == "E")
			{
				if(ai + offset > 35)
				{
					ai -= 36;
				}
				out_char = keys[0].charAt(ai + offset);
			}
			
			ki += 1 //Move Ahead in the key
		}
		
		document.getElementById(target).value += out_char;
	}
	
	
	
	
	return true;
}