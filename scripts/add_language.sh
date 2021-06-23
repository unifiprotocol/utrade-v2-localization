

if [ "$#" -ne 1 ]; then
    echo "You must pass language code as argument"
    exit
fi

echo "Adding new language: $new_lang"

new_lang=$1
tpl_dir="./i18n/en"
new_dir="./i18n/$new_lang"

if [ ${#new_lang} -ge 3 ];  then 
    echo "error: language code must be two char length following ISO 639-1.\nTake a look here: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" ;
    exit
fi

if [ -d $new_dir ]; then
    echo "Language $new_lang already exists. If you want to add modifications open $new_dir." 
    exit
fi


echo "- Creating dir for new language..."
mkdir $new_dir

echo "- Copying english files as a template"
cp $tpl_dir/en.json $new_dir/$new_lang.json

