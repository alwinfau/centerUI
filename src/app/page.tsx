"use client"

import {Button} from "@/app/component/ui/button";

import {DialogTrigger} from "react-aria-components";
import React, {useState} from "react";
import {CommandPalette} from "@/app/component/ui/command";
import {MenuItem} from "@/app/component/ui/menu";
import {Breadcrumb, Breadcrumbs} from "@/app/component/ui/breadcrumb";
import {Calendar} from "@/app/component/ui/calendar";
import {Checkbox} from "@/app/component/ui/checkbox";
import {CheckboxGroup} from "@/app/component/ui/checkbox-group";
import {ComboBox, ComboBoxItem} from "@/app/component/ui/combobox";
import {DateField} from "@/app/component/ui/date-field";
import {DatePicker} from "@/app/component/ui/date-picker";
import {DropZone, Text} from "@/app/component/ui/drop-zone";
import {type} from "node:os";
import {ProgressBar} from "@/app/component/ui/progress-bar";
import {Radio, RadioGroup} from "./component/ui/radio-group";
import {Select, SelectItem} from "@/app/component/ui/select";
import {Separator} from "@/app/component/ui/separator";
import {Slider} from "@/app/component/ui/slider";
import {Switch} from "@/app/component/ui/switch";
import {Form} from "@/app/component/ui/form";
import {TextField} from "@/app/component/ui/text-field";
import {Cell, Column, Row, Table, TableBody, TableHeader} from "@/app/component/ui/table";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@/app/component/ui/tabs";
import {Cog6ToothIcon, FolderIcon, HomeIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {Label} from "@/app/component/ui/field";


export  default function Home() {
    const  [isOpen, setIsOpen] = useState(false);
    const  [content, setContent] = useState<string | React.ReactElement | null>(null);
    let [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <main className="flex flex-wrap mx-auto w-3/4 gap-3 w-max-32 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Button isPending>
            Presme
        </Button>


          <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
              <Button>
                  Open Command
                  <kbd className={'font-sans text-xs ml-4 px-1 rounded-sm border border-white/20 bg-white/10"'}>
                      ⌘ J
                  </kbd>
              </Button>
              <CommandPalette
                  isOpen={isOpen}
                  onOpenChange={setIsOpen}>
                  <MenuItem>Create new file...</MenuItem>
                  <MenuItem>Create new folder...</MenuItem>
                  <MenuItem>Assign to...</MenuItem>
                  <MenuItem>Assign to me</MenuItem>
                  <MenuItem>Change status...</MenuItem>
                  <MenuItem>Change priority...</MenuItem>
                  <MenuItem>Add label...</MenuItem>
                  <MenuItem>Remove label...</MenuItem>
              </CommandPalette>
          </DialogTrigger>

          <Breadcrumbs>
              <Breadcrumb href={"#"}>Beranda</Breadcrumb>
              <Breadcrumb href={"#"}>centerUI</Breadcrumb>
              <Breadcrumb href={"#"}>Breadcrubm</Breadcrumb>
          </Breadcrumbs>

          <Calendar/>

          <div className={'flex gap-4 items-center justify-center'}>
              <Checkbox>Ingat Saya</Checkbox>
              <Checkbox isIndeterminate>Ingat Saya</Checkbox>
              <Checkbox isDisabled>Ingat Saya</Checkbox>
          </div>

          <CheckboxGroup label={'Programming Language'}>
              <Checkbox value={'Typescript'}>Typescript</Checkbox>
              <Checkbox value={'Php'}>Php</Checkbox>
              <Checkbox value={'Next JS'}>Next Js</Checkbox>
          </CheckboxGroup>

          <ComboBox
              label="Favorite Animal"
              placeholder="Select an animal">
              <ComboBoxItem>Aardvark</ComboBoxItem>
              <ComboBoxItem>Cat</ComboBoxItem>
              <ComboBoxItem>Dog</ComboBoxItem>
              <ComboBoxItem>Kangaroo</ComboBoxItem>
              <ComboBoxItem>Panda</ComboBoxItem>
              <ComboBoxItem>Snake</ComboBoxItem>
          </ComboBox>

          <DateField label="Date" />

          <DatePicker label="Date"/>

          <DropZone
              getDropOperation={types => (
                  [
                      'text/plain',
                      'image/jpeg',
                      'image/png',
                      'image/gif'
                  ].some(t => types.has(t)) ? 'copy' : 'cancel'
              )}

              onDrop={async (event) => {
                  // Find the first accepted item.
                  let item = event.items.find(item => (
                      (item.kind === 'text' && item.types.has('text/plain')) ||
                      (item.kind === 'file' && item.type.startsWith('image/'))
                  ));

                  if (item?.kind === 'text') {
                      let text = await item.getText('text/plain');
                      setContent(text);
                  } else if (item?.kind === 'file') {
                      let file = await item.getFile();
                      let url = URL.createObjectURL(file);
                      setContent(<img src={url} alt={item.name} style={{maxHeight: 100, maxWidth: '100%'}} />)
                  }
              }}>

              <Text slot={'label'}>
                  {content || 'Drop or paste text or images here'}
              </Text>
          </DropZone>

          <ProgressBar
              label={'loading...'}
              maxValue={150}
              value={50}
          />


          <div>
              <RadioGroup
                  label="Favorite sport"
                  value={selected}
                  onChange={setSelected}>
                      <Radio value="soccer">Soccer</Radio>
                      <Radio value="baseball">Baseball</Radio>
                      <Radio value="basketball">Basketball</Radio>
                </RadioGroup>
              <p>Current selection: {selected || 'None'}</p>
          </div>



          <Select label="Favorite Animal">
              <SelectItem>Aardvark</SelectItem>
              <SelectItem>Cat</SelectItem>
              <SelectItem>Dog</SelectItem>
              <SelectItem>Kangaroo</SelectItem>
              <SelectItem>Panda</SelectItem>
              <SelectItem>Snake</SelectItem>
          </Select>

          <Separator orientation={'horizontal'}/>

          <Slider orientation={'horizontal'}
              label="Opacity"
              formatOptions={{style: "decimal"}} />

          <Switch>Low power mode</Switch>

          <Form>
              <TextField label={'Username'} isRequired placeholder={'Silahkan Isikan username'}/>
              <TextField type={'password'} isRequired label={'Username'} placeholder={'Silahkan Isikan password'}/>
              <div className={'flex items-center justify-space-between gap-3'}>
                  <Button type={'submit'}>Login</Button>
                  <Button type={'reset'}>Reset</Button>
              </div>
          </Form>


          <Table
              aria-label="Files"
              selectionMode="multiple">
              <TableHeader>
                  <Column id="name" isRowHeader>Name</Column>
                  <Column id="type">Type</Column>
                  <Column id="date">Date Modified</Column>
              </TableHeader>
              <TableBody>
                  <Row id="games">
                      <Cell>Games</Cell>
                      <Cell>Folder</Cell>
                      <Cell>6/7/2023</Cell>
                      <Row id="mario">
                          <Cell>Mario Kart</Cell>
                          <Cell>Game</Cell>
                          <Cell>8/27/1992</Cell>
                      </Row>
                      <Row id="tetris">
                          <Cell>Tetris</Cell>
                          <Cell>Game</Cell>
                          <Cell>1/27/1988</Cell>
                      </Row>
                      <Row id="pacman">
                          <Cell>Pac-Man</Cell>
                          <Cell>Game</Cell>
                          <Cell>5/22/1980</Cell>
                      </Row>
                  </Row>
                  <Row id="apps">
                      <Cell>Applications</Cell>
                      <Cell>Folder</Cell>
                      <Cell>4/7/2025</Cell>
                      <Row id="ps">
                          <Cell>Photoshop</Cell>
                          <Cell>Application</Cell>
                          <Cell>2/19/1990</Cell>
                      </Row>
                      <Row id="premiere">
                          <Cell>Premiere</Cell>
                          <Cell>Application</Cell>
                          <Cell>9/24/2003</Cell>
                      </Row>
                      <Row id="lightroom">
                          <Cell>Lightroom</Cell>
                          <Cell>Application</Cell>
                          <Cell>10/18/2017</Cell>
                      </Row>
                  </Row>
                  <Row id="report">
                      <Cell>2024 Financial Report</Cell>
                      <Cell>PDF Document</Cell>
                      <Cell>12/30/2024</Cell>
                  </Row>
                  <Row id="job">
                      <Cell>Job Posting</Cell>
                      <Cell>Text Document</Cell>
                      <Cell>1/18/2025</Cell>
                  </Row>
              </TableBody>
          </Table>


          <Tabs>
              <TabList aria-label="Tabs">
                  <Tab id="home">Home</Tab>
                  <Tab id="files">Files</Tab>
                  <Tab id="search">Search</Tab>
                  <Tab id="settings">Settings</Tab>
              </TabList>
              <TabPanels>
                  <TabPanel id="home" className="flex flex-wrap item-start gap-2">
                      <HomeIcon className={'size-[18px]'}/>
                      <Label>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam atque, consequatur debitis dignissimos dolorem dolorum ducimus fugit, inventore ipsa molestias, nulla quae quia quis quisquam ratione similique. Cumque, vitae!</Label>
                  </TabPanel>
                  <TabPanel id="files" className="flex flex-wrap item-start gap-2">
                      <FolderIcon className={'size-[18px]'} />
                      <Label>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos eius maiores sit tenetur. Architecto autem consectetur cumque exercitationem facilis ipsum nam placeat quasi, repellat ullam, vel veniam voluptatem, voluptatum?
                      </Label>
                  </TabPanel>
                  <TabPanel id="search" className="flex flex-wrap item-start gap-2">
                      <MagnifyingGlassIcon className={'size-[18px]'} />
                      <Label>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea exercitationem fugit iusto nostrum optio quidem, reprehenderit. A architecto eveniet exercitationem facere facilis quibusdam? Ab consectetur dignissimos ex iure odio.
                      </Label>
                  </TabPanel>
                  <TabPanel id="settings" className="flex flex-wrap item-start gap-2">
                      <Cog6ToothIcon className={'size-[18px]'} />
                      <Label>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque blanditiis cupiditate, deleniti doloremque esse in iste minima nulla placeat provident rerum soluta, tempora! Animi cumque ea eligendi porro ullam.
                      </Label>
                  </TabPanel>
              </TabPanels>
          </Tabs>
      </main>
    </>
  );
}

